<script lang="ts">
	import { run } from 'svelte/legacy';

	import { escapeHTML } from 'es-escape-html';

	interface Props {
		src?: string;
		width?: string | number | null | undefined;
		height?: string | number | null | undefined;
		altText?: string | undefined;
		title?: string;
	}

	let {
		src = '',
		width = $bindable(undefined),
		height = $bindable(undefined),
		altText = undefined,
		title = ''
	}: Props = $props();

	run(() => {
		width = width === 0 ? undefined : width;
	});
	run(() => {
		height = height === 0 ? undefined : height;
	});
</script>

<img loading="lazy" src={escapeHTML(src)} {width} {height} alt={altText} {title} />
