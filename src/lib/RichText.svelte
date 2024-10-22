<script lang="ts">
	import type { EmbedReferences, RichTextContent } from '@graphcms/rich-text-types';
	import type { NodeRendererType } from './types.js';

	import RenderElements from './RenderElements.svelte';

	type Props = {
		content: RichTextContent;
		references?: EmbedReferences | undefined;
	} & NodeRendererType

	let {
		content,
		references = undefined,
		...renderers
	}: Props = $props();

	//Derive renderers with defaults so user doesnt have to supply all of them
</script>

<RenderElements {content} {renderers} {references}>
</RenderElements>