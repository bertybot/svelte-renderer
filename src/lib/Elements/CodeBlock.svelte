<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<pre
	style:white-space="pre"
	style:word-wrap="break-word"
	style:overflow-x="auto"
	style:font-family="monospace">
{@render children?.()}
</pre>
