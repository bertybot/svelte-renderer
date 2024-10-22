<script lang="ts">
	import type { NodeRendererType } from './types.js';

	interface Props {
		/** @description unique identifier for content block to make sure it updates during CSR or propchange defaults to stringifying content if not supplied */
		text: string;
		bold?: boolean;
		italic?: boolean;
		underline?: boolean;
		code?: boolean;
		shouldSerialize: boolean;
		renderers?: NodeRendererType;
	}

	let {
		text,
		bold = false,
		italic = false,
		underline = false,
		code = false,
		shouldSerialize,
		renderers = undefined
	}: Props = $props();

	let snippet = $derived.by(() => {
		if (bold) return renderers?.['bold'] || boldDefault;
		if (italic) return renderers?.['italic'] || italicDefault;
		if (underline) return renderers?.['underline'] || underlineDefault;
		if (code) return renderers?.['code'] || codeDefault;

		return splitText;
	});
</script>

{#snippet splitText()}
	{#if shouldSerialize && text.includes('\n')}
		{@const formattedText = text.split('\n')}
		{#each formattedText as line, index}
			{line}
			{#if index !== splitText.length - 1}
				<br />
			{/if}
		{/each}
	{:else}
		{text}
	{/if}
{/snippet}

{#snippet boldDefault()}
	<b>{@render splitText()}</b>
{/snippet}

{#snippet codeDefault()}
	<code>{@render splitText()}</code>
{/snippet}

{#snippet italicDefault()}
	<i>{@render splitText()}</i>
{/snippet}

{#snippet underlineDefault()}
	<u>{@render splitText()}</u>
{/snippet}

{@render snippet()}