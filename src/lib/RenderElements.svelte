<script lang="ts">
	import type { NodeRendererType } from './types.js';
	import {
		type EmbedReferences,
		type Node,
		type RichTextContent,
		isText,
		isElement
	} from '@graphcms/rich-text-types';
	import RenderText from './RenderText.svelte';
	import RenderElement from './RenderElement.svelte';
	import { getArrayOfElements } from './getArrayOfElements.js';
	import { supressWarnings } from './supressWarnings.js';

	interface Props {
		content: RichTextContent;
		renderers?: NodeRendererType | undefined;
		references?: EmbedReferences | undefined;
		parent?: Node | null;
	}

	let {
		content,
		renderers = undefined,
		references = undefined,
		parent = null
	}: Props = $props();

	let elements = $derived(getArrayOfElements(content));

	supressWarnings();
</script>

{#each elements as node(node)}
	{#if isText(node)}
		{@const shouldSerialize = !!parent && isElement(parent) && parent.type !== 'code-block'}
		<RenderText {...node} {shouldSerialize} {renderers} />
	{:else if isElement(node)}
		<RenderElement element={node} {renderers} {references} />
	{/if}
{/each}
