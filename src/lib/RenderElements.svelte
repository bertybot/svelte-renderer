<script lang="ts">
	import type { EmbedReferences, Node } from '@graphcms/rich-text-types';
	import type { NodeRendererType, RichTextContent} from './types';
    
	import { getArrayOfElements } from './getArrayOfElements';
	import RenderNode from './RenderNode.svelte';

	export let content: RichTextContent;
	export let renderers: NodeRendererType | undefined = undefined;
	export let references: EmbedReferences | undefined = undefined;
	export let parent: Node | null = null;

	$: elements = getArrayOfElements(content);
</script>

{#each elements as node, index (index)}
	<RenderNode {node} {parent} {renderers} {references} />
{/each}
