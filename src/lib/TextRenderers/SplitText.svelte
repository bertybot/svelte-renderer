<script lang="ts">
	export let text = '';
	export let shouldSerialize: boolean;

	$: splitText = text.split('\n');
</script>

{#if shouldSerialize && text.includes('\n')}
	{#each splitText as line, index}
		{line}
		{#if index !== splitText.length - 1}
			<br />
		{/if}
	{/each}
{:else}
	{text}
{/if}
