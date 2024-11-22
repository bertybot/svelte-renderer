<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { NodeRendererType } from './types';
	import { defaultElements } from './defaultElements';

	interface Props extends HTMLAttributes<HTMLElement> {
		nodeRendererType: keyof NodeRendererType;
		children?: import('svelte').Snippet;
	}

	let { nodeRendererType, children, ...rest }: Props = $props();
	let Component = $derived(defaultElements[nodeRendererType]);
</script>

{#if !Component}
	{@render children?.()}
{:else if typeof Component === 'string' || typeof Component === 'number'}
	<svelte:element this={Component} {...rest}>
		{@render children?.()}
	</svelte:element>
{:else}
	<Component {...rest}>
		{@render children?.()}
	</Component>
{/if}
