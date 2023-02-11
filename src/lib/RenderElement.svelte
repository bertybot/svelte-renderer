<script lang="ts">
	import type { NodeRendererType } from './types';
	import type { SvelteComponent } from 'svelte';

	import {
		type ElementNode,
		type EmbedReferences,
		elementTypeKeys,
		EmptyElementsToRemove,
		isEmpty
	} from '@graphcms/rich-text-types';
	import RenderElements from './RenderElements.svelte';

	export let element: ElementNode;
	export let renderers: NodeRendererType | undefined = undefined;
	export let references: EmbedReferences | undefined = undefined;

	function getEmbedComponent() {
		const { children, type, ...rest } = element;
		const { nodeId, nodeType } = rest;

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

		const elementToRender = renderers?.Asset?.[referenceValues?.mimeType];
		if (elementToRender !== undefined) return elementToRender;

		const mimeTypeGroup = referenceValues?.mimeType.split('/')[0];
		return renderers?.Asset?.[mimeTypeGroup];
	}

	$: isEmbed = element.type === 'embed';
	$: referenceValues = isEmbed ? references?.filter((ref) => ref.id === element?.nodeId)[0] : null;
	$: component = isEmbed
		? getEmbedComponent()
		: (renderers?.[
				elementTypeKeys[element.type] as keyof NodeRendererType
		  ] as typeof SvelteComponent);
	$: removeEmptyElement = element.type in EmptyElementsToRemove && isEmpty(element);
	$: content = element.children as ElementNode[];
</script>

{#if !removeEmptyElement && component}
	<svelte:component this={component} {...element} {...referenceValues}>
		<RenderElements {content} {renderers} {references} parent={element} />
	</svelte:component>
{/if}
