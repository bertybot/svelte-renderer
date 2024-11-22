<script lang="ts">
	interface Props {
		url?: string;
	}

	let { url = '' }: Props = $props();
</script>

<audio src={url} style:display="block" style:max-width="100%" style:height="auto" controls>
	<p>
		Your browser doesn't support HTML5 audio. Here is a
		<a href={url}>link to the audio</a> instead.
	</p>
</audio>
