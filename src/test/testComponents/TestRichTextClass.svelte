<script lang="ts">
	import RichText from '$lib/RichText.svelte';

	let { content } = $props();
</script>
{#snippet Testclass({ children })}
<section class="bg-white">{@render children?.()}</section>
{/snippet}
<RichText {content} class={Testclass}>

</RichText>