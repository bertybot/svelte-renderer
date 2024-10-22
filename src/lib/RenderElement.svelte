<script lang="ts">
	import type { NodeRendererType } from './types.js';
	import {
		type ElementNode,
		type EmbedReferences,
		EmptyElementsToRemove,
		isEmpty
	} from '@graphcms/rich-text-types';
	import RenderElements from './RenderElements.svelte';
	import Element from './Element.svelte';
	interface Props {
		element: ElementNode;
		renderers?: NodeRendererType | undefined;
		references?: EmbedReferences | undefined;
	}

	let { element, renderers = undefined, references = undefined }: Props = $props();

	let removeEmptyElement = $derived(element.type in EmptyElementsToRemove && isEmpty(element));
</script>

{#if !removeEmptyElement}
	<Element {element} {renderers} {references}>
		<RenderElements content={element.children as ElementNode[]} {renderers} {references} parent={element}/>
	</Element>
{/if}