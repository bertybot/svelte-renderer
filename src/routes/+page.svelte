<script lang="ts">
	import type { RichTextContent } from '@graphcms/rich-text-types';

	import RichText from '$lib/RichText.svelte';

	const content: RichTextContent = {
		children: [
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'Hello World!'
					}
				]
			}
		]
	};
</script>

<RichText {content} />
