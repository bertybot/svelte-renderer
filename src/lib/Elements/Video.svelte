<script lang="ts">
	import { escapeHTML } from 'es-escape-html';

	export let src = '';
	export let width = '';
	export let height = '';
	export let title = '';
</script>


<!-- svelte-ignore a11y-media-has-caption -->
<video src={escapeHTML(src)} controls width={width || '100%'} height={height || '100%'} {title}>
	<p>
		Your browser doesn't support HTML5 video. Here is a{' '}
		<a href={src}>link to the video</a> instead.
	</p>
</video>
