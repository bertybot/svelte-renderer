<script lang="ts">
	import { escapeHTML } from 'es-escape-html';

	export let src = '';
	export let width: string | number | null | undefined = undefined;
	export let height: string | number | null | undefined = undefined;
	export let altText = '';
	export let title = '';
</script>

<img loading="lazy" src={escapeHTML(src)} {width} {height} alt={altText} {title} />
