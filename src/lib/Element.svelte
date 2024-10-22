<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ElementRendererType, NodeRendererType } from './types.js';
	import {
		type ElementNode,
		elementTypeKeys,
		type EmbedReferences
	} from '@graphcms/rich-text-types';
	import { escapeHTML } from 'es-escape-html';

	type Props = {
		element: ElementNode;
		references?: EmbedReferences | undefined;
		renderers?: NodeRendererType | undefined;
		children: Snippet;
	} & ElementRendererType;

	const elementKeys: Record<ElementNode['type'], string> = {
		'heading-one': 'h1',
		'heading-two': 'h2',
		'heading-three': 'h3',
		'heading-four': 'h4',
		'heading-five': 'h5',
		'heading-six': 'h6',
		class: 'div',
		link: 'a',
		image: 'img',
		iframe: 'iframe',
		video: 'video',
		'bulleted-list': 'ul',
		'numbered-list': 'ol',
		'list-item': 'li',
		'list-item-child': 'div',
		table: 'table',
		table_head: 'thead',
		table_body: 'tbody',
		table_row: 'tr',
		table_cell: 'td',
		table_header_cell: 'th',
		'block-quote': 'blockquote',
		paragraph: 'p',
		'code-block': 'pre',
		embed: 'div'
	};
	let {  element, references, renderers, children }: Props = $props();

	function getEmbedComponent() {
		const referenceValues = references?.filter((ref) => ref.id === element?.nodeId)[0];
		const { type, ...rest } = element;
		const { nodeId, nodeType } = rest;

		/**
		 * There's two options if the element is an embed.
		 * 1. If it isn't an asset, then we simply try to use the renderer for that model.
		 *  1.1 If we don't find a renderer, we render a Fragment and show a warning.
		 * 2. If it is an asset, then:
		 *  2.1 If we have a custom renderer for that specific mimeType, we use it.
		 *  2.2 If we don't have, we use the default mimeType group renderer (application, image, video...).
		 */
		if (!referenceValues?.id) {
			console.error(
				`[rich-text-svelte-renderer]: No id found for embed node ${nodeId}. In order to render custom embeds, \`id\` is required in your reference query.`
			);
			return elementTag;
		}

		//Option 1
		if (nodeType !== 'Asset') {
			const elementToRender =
				type === 'link'
					? renderers?.link?.[nodeType as string]
					: renderers?.embed?.[nodeType as string];

			if (elementToRender !== undefined) return elementToRender;

			console.warn(
				`[rich-text-svelte-renderer]: No renderer found for custom ${type} nodeType ${nodeType}.`
			);

			return elementTag;
		}

		//Option 2
		if (!referenceValues?.mimeType) {
			console.error(
				`[rich-text-svelte-renderer]: No mimeType found for embed node ${nodeId}. In order to render custom assets, \`mimeType\` is required in your reference query.`
			);
			return elementTag;
		}

		if (!referenceValues?.url) {
			console.error(
				`[rich-text-svelte-renderer]: No url found for embed node ${nodeId}. In order to render custom assets, \`url\` is required in your reference query.`
			);
			return elementTag;
		}

		const elementToRender = renderers?.Asset?.[referenceValues?.mimeType];
		if (elementToRender !== undefined) return elementToRender;

		const mimeTypeGroup = referenceValues?.mimeType.split('/')[0];
		return renderers?.Asset?.[mimeTypeGroup] || elementTag;
	}

	let snippet: Snippet<[any]> = $derived.by(() => {
		if (element?.type === 'embed') {
			return getEmbedComponent();
		}

		const userSnippet = renderers?.[elementTypeKeys[element?.type] as keyof ElementRendererType] as
			| Snippet<[any]>
			| undefined;

		if (userSnippet) {
			return userSnippet;
		}

		if (element.type === 'link') {
			return a;
		}
		if (element.type === 'image') {
			return img;
		}
		if (element.type === 'iframe') {
			return iframe;
		}
		if (element.type === 'code-block') {
			return codeblock;
		}

		return elementTag;
	});
</script>

<!-- Add Default elementTags-->

{#snippet elementTag({ type, className }: ElementNode)}
	<svelte:element this={elementKeys[type]} class={className}>{@render children()}</svelte:element>
{/snippet}

{#snippet a({ href, rel, id, title, className, openInNewTab }: ElementNode)}
	<a
		href={escapeHTML(href)}
		{rel}
		{id}
		{title}
		class={className}
		target={openInNewTab ? '_blank' : undefined}
	>
		{@render children()}</a
	>
{/snippet}

{#snippet codeblock()}
	<pre
		style:white-space="pre"
		style:word-wrap="break-word"
		style:overflow-x="auto"
		style:font-family="monospace">
{@render children?.()}
</pre>
{/snippet}

{#snippet iframe({ url, title }: ElementNode)}
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
			src={escapeHTML(url)}
			loading="lazy"
			allow="fullscreen"
			frameBorder="0"
			referrerPolicy="no-referrer"
			{title}
		></iframe>
	</div>
{/snippet}

{#snippet img({ src, width, height, altText, title }: ElementNode)}
	<img loading="lazy" src={escapeHTML(src)} width={width === 0 ? undefined : width} height={height === 0 ? undefined : height} alt={altText} {title} />
{/snippet}

{@render snippet({ ...element, children })}
