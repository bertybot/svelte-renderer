import type { NodeRendererType } from './types';
import { Class, Link, Video, Image, IFrame, Audio, Fallback, CodeBlock } from './Elements';
import type { Component } from 'svelte';

export const defaultElements: Required<NodeRendererType> = {
	a: Link,
	class: Class,
	video: Video,
	img: Image,
	iframe: IFrame,
	code_block: CodeBlock,
	blockquote: 'blockquote',
	ul: 'ul',
	ol: 'ol',
	li: 'li',
	p: 'p',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	table: 'table',
	bold: 'b',
	italic: 'i',
	superscript: 'sup',
	subscript: 'sub',
	underline: 'u',
	code: 'code',
	table_head: 'thead',
	table_body: 'tbody',
	table_row: 'tr',
	table_cell: 'td',
	table_header_cell: 'th',
	list_item_child: null
};

export const defaultAssets: Record<string, Component<any>> = {
	audio: Audio,
	image: Image,
	video: Video,
	font: Fallback,
	application: Fallback,
	model: Fallback,
	text: Fallback
};
