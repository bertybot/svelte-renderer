<script lang="ts">
	import RichText from '$lib/RichText.svelte';

	let { content } = $props();
</script>

<RichText {content}>
	{#snippet img({ children })}
		<img {src} alt={altText} />
	{/snippet}
</RichText>
