<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [src]
	 * @property {string} [altText]
	 */

	/** @type {Props} */
	let { src = '', altText = '' } = $props();
</script>

<img {src} alt={altText} />
