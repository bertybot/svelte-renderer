<script lang="ts">
	import RichText from '$lib/RichText.svelte';

	let { content } = $props();
</script>

<RichText {content}>
	{#snippet p({ children })}
		<p class="text-white">{@render children?.()}</p>
	{/snippet}
	{#snippet bold({ children })}
		<strong class="text-black">{@render children?.()}</strong>
	{/snippet}
	{#snippet italic({ children })}<i class="italic-class" style:color="red">{@render children?.()}</i
		>{/snippet}
	{#snippet underline({ children })}
		<u role="button">{@render children?.()} test</u>,
	{/snippet}
</RichText>
