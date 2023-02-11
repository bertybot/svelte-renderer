<script lang="ts">
	import { escapeHTML } from 'es-escape-html';
	export let href: string;
	export let rel: string | undefined = undefined;
	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let className: string | undefined = undefined;
	export let openInNewTab = false;

	$: target = openInNewTab ? '_blank' : undefined;
</script>

<a href={escapeHTML(href)} {rel} {id} {title} class={className} {target}> <slot /></a>
