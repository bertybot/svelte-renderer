<script lang="ts">
	import type { NodeRendererType } from './types';
	import {
		type ElementNode,
		type EmbedReferences,
		type Text,
		elementTypeKeys,
		EmptyElementsToRemove,
		isEmpty
	} from '@graphcms/rich-text-types';
	import type { SvelteComponent } from 'svelte';
	import RenderElements from './RenderElements.svelte';

	export let type: string;
	export let children: Array<ElementNode | Text>;
	export let nodeId: string | undefined = undefined;
	export let nodeType: string | undefined = undefined;
	export let renderers: NodeRendererType | undefined = undefined;
	export let references: EmbedReferences | undefined = undefined;

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
			const element =
				type === 'link'
					? renderers?.link?.[nodeType as string]
					: renderers?.embed?.[nodeType as string];

			if (element !== undefined) return element;

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

		const element = renderers?.Asset?.[referenceValues?.mimeType];
		if (element !== undefined) return element;

		const mimeTypeGroup = referenceValues?.mimeType.split('/')[0];
		return renderers?.Asset?.[mimeTypeGroup];
	}

	$: isEmbed = type === 'embed';
	$: referenceValues = isEmbed ? references?.filter((ref) => ref.id === nodeId)[0] : null;
	$: component = isEmbed
		? getEmbedComponent()
		: (renderers?.[elementTypeKeys[type] as keyof NodeRendererType] as typeof SvelteComponent);
	$: removeEmptyElement = type in EmptyElementsToRemove && isEmpty({ children });
	$: parent = {type, children};
</script>

{#if !removeEmptyElement && component}
	<svelte:component this={component} {...$$restProps} {nodeId} {nodeType} {...referenceValues}>
		<RenderElements content={children} {renderers} {references} {parent} />
	</svelte:component>
{/if}
