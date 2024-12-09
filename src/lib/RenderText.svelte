<script lang="ts">
	import type { NodeRendererType } from './types';
	import DefaultElement from './DefaultElement.svelte';

	interface Props {
		text: string;
		bold?: boolean;
		italic?: boolean;
		underline?: boolean;
		superscript?: boolean;
		subscript?: boolean;
		code?: boolean;
		shouldSerialize: boolean;
		renderers: NodeRendererType | undefined;
	}

	let {
		text,
		bold = false,
		italic = false,
		underline = false,
		code = false,
		superscript = false,
		subscript = false,
		shouldSerialize,
		renderers
	}: Props = $props();

	let nodeRendererType: keyof NodeRendererType | null = $derived.by(() => {
		if (bold) return 'bold';
		if (italic) return 'italic';
		if (underline) return 'underline';
		if (code) return 'code';
		if (superscript) return 'superscript';
		if (subscript) return 'subscript';
		return null;
	});

	let TextComponent = $derived(
		nodeRendererType ? renderers?.[nodeRendererType] || DefaultElement : null
	);
</script>

{#if typeof TextComponent === 'string' || typeof TextComponent === 'number'}
	<svelte:element this={TextComponent}>
		{@render splitText()}
	</svelte:element>
{:else if nodeRendererType && TextComponent}
	<TextComponent {nodeRendererType}>
		{@render splitText()}
	</TextComponent>
{:else}
	{@render splitText()}
{/if}

{#snippet splitText()}
	{#if shouldSerialize && text.includes('\n')}
		{@const formattedText = text.split('\n')}
		{#each formattedText as line, index}
			{line}
			{#if index !== formattedText.length - 1}
				<br />
			{/if}
		{/each}
	{:else}
		{text}
	{/if}
{/snippet}
