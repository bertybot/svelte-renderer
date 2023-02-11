<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import SplitText from './TextRenderers/SplitText.svelte';
	import type { NodeRendererType } from './types';

	export let text: string;
	export let bold = false;
	export let italic = false;
	export let underline = false;
	export let code = false;
	export let shouldSerialize: boolean;
	export let renderers: NodeRendererType | undefined;

	let component: typeof SvelteComponent | undefined = undefined;

	$: {
		if (bold) component = renderers?.['bold'];
		if (italic) component = renderers?.['italic'];
		if (underline) component = renderers?.['underline'];
		if (code) component = renderers?.['code'];
	}
</script>

{#if component}
	<svelte:component this={component}>
		<SplitText {text} {shouldSerialize} />
	</svelte:component>
{:else}
	<SplitText {text} {shouldSerialize} />
{/if}
