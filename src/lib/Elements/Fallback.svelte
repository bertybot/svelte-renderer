<script lang="ts">
	interface Props {
		mimeType: string;
	}

	let { mimeType }: Props = $props();
	console.warn(
		`[rich-text-svelte-renderer]: Unsupported mimeType encountered: ${mimeType}. You need to write your renderer to render it since we are not opinionated about how this asset should be rendered (check our docs for more info).`
	);
</script>
