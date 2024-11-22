<script lang="ts">
	import { escapeHTML } from 'es-escape-html';

	interface Props {
		src?: string;
		width?: string | number | null | undefined;
		height?: string | number | null | undefined;
		altText?: string | undefined;
		title?: string;
	}

	let {
		src = undefined,
		width = $bindable(undefined),
		height = $bindable(undefined),
		altText = undefined,
		title = ''
	}: Props = $props();
</script>

<img
	loading="lazy"
	src={src ? escapeHTML(src) : src}
	width={width === 0 ? undefined : width}
	height={height === 0 ? undefined : height}
	alt={altText}
	{title}
/>
