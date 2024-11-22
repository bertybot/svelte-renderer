<script lang="ts">
	import { escapeHTML } from 'es-escape-html';
	interface Props {
		href: string;
		rel?: string | undefined;
		id?: string | undefined;
		title?: string | undefined;
		className?: string | undefined;
		openInNewTab?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		href,
		rel = undefined,
		id = undefined,
		title = undefined,
		className = undefined,
		openInNewTab = false,
		children
	}: Props = $props();

	let target = $derived(openInNewTab ? '_blank' : undefined);
</script>

<a href={escapeHTML(href)} {rel} {id} {title} class={className} {target}> {@render children?.()}</a>
