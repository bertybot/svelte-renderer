<script lang="ts">
	import type { NodeRendererType } from './types';
	import type { EmbedReferences } from '@graphcms/rich-text-types';

	export let type: string;
	export let children: Node[];
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
    
	}

    $:isEmbed = type === 'embed';
    $:referenceValues = isEmbed ? references?.filter(ref => ref.id === nodeId)[0]: null;
    $:component = isEmbed ? getEmbedComponent(): renderers?.[element]
    
</script>
