<script lang="ts">
	import type { EmbedReferences, RichTextContent } from '@graphcms/rich-text-types';
	import type { RendererType } from './types';

	import RenderElements from './RenderElements.svelte';

	interface Props {
		content: RichTextContent;
		renderers?: RendererType | undefined;
		references?: EmbedReferences | undefined;
	}

	let { content, renderers = undefined, references = undefined }: Props = $props();
</script>

<RenderElements {content} {renderers} {references} />
