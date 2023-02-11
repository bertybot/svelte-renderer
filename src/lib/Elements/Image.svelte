<script lang="ts">
	import { escapeHTML } from 'es-escape-html';

	export let src = '';
	export let width: string | number | null | undefined = undefined;
	export let height: string | number | null | undefined = undefined;
	export let altText: string | undefined = undefined;
	export let title = '';

	$: width = width === 0 ? undefined : width;
	$: height = height === 0 ? undefined : height;
</script>

<img loading="lazy" src={escapeHTML(src)} {width} {height} alt={altText} {title} />
