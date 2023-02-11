<script lang="ts">
	import type { NodeRendererType } from './types';

	import { type EmbedReferences, type Node, isText, isElement } from '@graphcms/rich-text-types';
	import RenderText from './RenderText.svelte';
	import RenderElement from './RenderElement.svelte';

	export let node: Node;
	export let renderers: NodeRendererType | undefined;
	export let references: EmbedReferences | undefined = undefined;
	export let parent: Node | null = null;
</script>

{#if isText(node)}
	{@const shouldSerialize = !!parent && isElement(parent) && parent.type !== 'code-block'}
	<RenderText {...node} {shouldSerialize} {renderers} />
{:else if isElement(node)}
	<RenderElement element={node} {renderers} {references} />
{/if}
