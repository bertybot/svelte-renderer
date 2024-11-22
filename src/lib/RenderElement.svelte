<script lang="ts">
	import type { NodeRendererType, RendererType } from './types';
	import {
		type ElementNode,
		type EmbedReferences,
		elementTypeKeys,
		EmptyElementsToRemove,
		isEmpty
	} from '@graphcms/rich-text-types';
	import RenderElements from './RenderElements.svelte';
	import DefaultElement from './DefaultElement.svelte';
	import { defaultAssets } from './defaultElements';

	interface Props {
		element: ElementNode;
		renderers?: RendererType | undefined;
		references?: EmbedReferences | undefined;
	}

	let { element, renderers = undefined, references = undefined }: Props = $props();

	let { children, nodeId, nodeType, type, ...rest } = $derived(element);

	let removeEmptyElement = $derived(element.type in EmptyElementsToRemove && isEmpty(element));

	let isEmbed = $derived(element.type === 'embed');
	let referenceValues = $derived(
		isEmbed ? references?.filter((ref) => ref.id === nodeId)[0] : null
	);

	function getEmbedComponent() {
		/**
		 * There's two options if the element is an embed.
		 * 1. If it isn't an asset, then we simply try to use the renderer for that model.
		 *  1.1 If we don't find a renderer, we render a Fragment and show a warning.
		 * 2. If it is an asset, then:
		 *  2.1 If we have a custom renderer for that specific mimeType, we use it.
		 *  2.2 If we don't have, we use the default mimeType group renderer (application, image, video...).
		 */
		if (!referenceValues?.id) {
			console.error(
				`[rich-text-svelte-renderer]: No id found for embed node ${nodeId}. In order to render custom embeds, \`id\` is required in your reference query.`
			);
			return null;
		}

		//Option 1
		if (nodeType !== 'Asset') {
			const elementToRender =
				type === 'link'
					? renderers?.link?.[nodeType as string]
					: renderers?.embed?.[nodeType as string];

			if (elementToRender !== undefined) return elementToRender;

			console.warn(
				`[rich-text-svelte-renderer]: No renderer found for custom ${type} nodeType ${nodeType}.`
			);

			return null;
		}

		//Option 2
		if (!referenceValues?.mimeType) {
			console.error(
				`[rich-text-svelte-renderer]: No mimeType found for embed node ${nodeId}. In order to render custom assets, \`mimeType\` is required in your reference query.`
			);
			return null;
		}

		if (!referenceValues?.url) {
			console.error(
				`[rich-text-svelte-renderer]: No url found for embed node ${nodeId}. In order to render custom assets, \`url\` is required in your reference query.`
			);
			return null;
		}

		const elementToRender =
			renderers?.Asset?.[referenceValues?.mimeType] || defaultAssets[referenceValues?.mimeType];
		if (elementToRender !== undefined) return elementToRender;

		const mimeTypeGroup = referenceValues?.mimeType.split('/')[0];
		return renderers?.Asset?.[mimeTypeGroup] || defaultAssets[mimeTypeGroup];
	}

	let nodeRendererType = $derived(elementTypeKeys[element.type] as keyof NodeRendererType);
	let Component = $derived(
		isEmbed ? getEmbedComponent() : renderers?.[nodeRendererType] || DefaultElement
	);
	let content = $derived(element.children as ElementNode[]);
</script>

{#if !removeEmptyElement}
	{#if typeof Component === 'string' || typeof Component === 'number'}
		<svelte:element this={Component} {...rest}>
			<RenderElements {content} {renderers} {references} parent={element} />
		</svelte:element>
	{:else if Component}
		<Component {nodeRendererType} {...referenceValues} {...rest}>
			<RenderElements {content} {renderers} {references} parent={element} />
		</Component>
	{/if}
{/if}
