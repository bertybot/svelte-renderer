<script lang="ts">
	interface Props {
		url?: string;
		title?: string;
	}

	let { url = '', title = '' }: Props = $props();
</script>

<div
	style:position="relative"
	style:overflow="hidden"
	style:width="100%"
	style:padding-top="56.25%"
>
	<iframe
		style:position="absolute"
		style:top="0"
		style:bottom="0"
		style:right="0"
		style:left="0"
		style:width="100%"
		style:height="100%"
		src={encodeURI(url)}
		loading="lazy"
		allow="fullscreen"
		frameBorder="0"
		referrerPolicy="no-referrer"
		{title}
	></iframe>
</div>
