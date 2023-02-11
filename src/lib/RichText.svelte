<script lang="ts">
	import type { EmbedReferences } from '@graphcms/rich-text-types';
	import type { NodeRendererType, RichTextContent } from './types';

	import RenderElements from './RenderElements.svelte';
	import { getArrayOfElements } from './getArrayOfElements';
	import { defaultElements } from './defaultElements';

	export let content: RichTextContent;
	export let renderers: NodeRendererType | undefined = undefined;
	export let references: EmbedReferences | undefined = undefined;

	$: elements = getArrayOfElements(content);
	$: renderers = {
		...defaultElements,
		...renderers,
		Asset: {
			...defaultElements.Asset,
			...renderers?.Asset
		}
	};
</script>

<RenderElements content={elements} />
