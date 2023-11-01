<script lang="ts">
	import type { NodeRendererType } from './types';
	import {
		type EmbedReferences,
		type Node,
		type RichTextContent,
		isText,
		isElement
	} from '@graphcms/rich-text-types';
	import RenderText from './RenderText.svelte';
	import RenderElement from './RenderElement.svelte';
	import { getArrayOfElements } from './getArrayOfElements';
	import { supressWarnings } from './supressWarnings';

	export let slug: string | null = null;
	export let content: RichTextContent;
	export let renderers: NodeRendererType | undefined = undefined;
	export let references: EmbedReferences | undefined = undefined;
	export let parent: Node | null = null;

	$: elements = getArrayOfElements(content);
	$: key = slug || JSON.stringify(elements);

	supressWarnings();
</script>

{#each elements as node, index (index + key)}
	{#if isText(node)}
		{@const shouldSerialize = !!parent && isElement(parent) && parent.type !== 'code-block'}
		<RenderText {...node} {shouldSerialize} {renderers} />
	{:else if isElement(node)}
		<RenderElement element={node} {renderers} {references} slug={index + key} />
	{/if}
{/each}
