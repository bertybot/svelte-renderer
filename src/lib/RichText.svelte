<script lang="ts">
	import type { EmbedReferences, RichTextContent } from '@graphcms/rich-text-types';
	import type { NodeRendererType } from './types';

	import RenderElements from './RenderElements.svelte';
	import { defaultElements } from './defaultElements';

	/** @description unique identifier for content block to make sure it updates during CSR or propchange defaults to stringifying content if not supplied */
	export let slug: string | null = null;
	export let content: RichTextContent;
	export let renderers: NodeRendererType | undefined = undefined;
	export let references: EmbedReferences | undefined = undefined;

	$: renderers = {
		...defaultElements,
		...renderers,
		Asset: {
			...defaultElements.Asset,
			...renderers?.Asset
		}
	};
</script>

<RenderElements {slug} {content} {renderers} {references} />
