<script lang="ts">
	export let url = '';
</script>

<audio src={url} style:display="block" style:maxWidth="100%" style:height="auto" controls>
	<p>
		Your browser doesn't support HTML5 audio. Here is a
		<a href={url}>link to the audio</a> instead.
	</p>
</audio>
