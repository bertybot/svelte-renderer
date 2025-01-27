<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { NodeRendererType } from './types';
	import { defaultElements } from './defaultElements';
	import type { ElementNode } from '@graphcms/rich-text-types';

	interface Props extends HTMLAttributes<HTMLElement> {
		nodeRendererType: keyof NodeRendererType;
		children?: import('svelte').Snippet;
		content?: ElementNode[];
	}

	let { nodeRendererType, children, content, ...rest }: Props = $props();
	let Component = $derived(defaultElements[nodeRendererType]);
</script>

{#if !Component}
	{@render children?.()}
{:else if typeof Component === 'string' || typeof Component === 'number'}
	<svelte:element this={Component} {...rest}>
		{@render children?.()}
	</svelte:element>
{:else}
	<Component {content} {...rest}>
		{@render children?.()}
	</Component>
{/if}
