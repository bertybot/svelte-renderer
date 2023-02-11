<script lang="ts">
	import { escapeHTML } from 'es-escape-html';

	export let url = '';
	export let title = '';
</script>

<div style:position="relative" style:overflow="hidden" style:width="100%" style:paddingTop="56.25%">
	<iframe
		style:position="absolute"
		style:top="0"
		style:bottom="0"
		style:right="0"
		style:left="0"
		style:width="100%"
		style:height="100%"
		src={escapeHTML(url)}
		loading="lazy"
		allow="fullscreen"
		frameBorder="0"
		referrerPolicy="no-referrer"
        {title}
	/>
</div>
