<script lang="ts">
	import { escapeHTML } from 'es-escape-html';

	interface Props {
		src?: string;
		width?: string;
		height?: string;
		title?: string;
	}

	let { src = '', width = '', height = '', title = '' }: Props = $props();
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video src={escapeHTML(src)} controls width={width || '100%'} height={height || '100%'} {title}>
	<p>
		Your browser doesn't support HTML5 video. Here is a{' '}
		<a href={src}>link to the video</a> instead.
	</p>
</video>
