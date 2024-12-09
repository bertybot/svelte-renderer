import type { Component } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

interface AssetRendererType {
	application?: Component<any> | keyof SvelteHTMLElements;
	audio?: Component<any> | keyof SvelteHTMLElements;
	font?: Component<any> | keyof SvelteHTMLElements;
	image?: Component<any> | keyof SvelteHTMLElements;
	model?: Component<any> | keyof SvelteHTMLElements;
	text?: Component<any> | keyof SvelteHTMLElements;
	video?: Component<any> | keyof SvelteHTMLElements;
	[key: string]: Component<any> | keyof SvelteHTMLElements | undefined;
}

export interface NodeRendererType {
	a?: Component<any> | keyof SvelteHTMLElements;
	class?: Component<any> | keyof SvelteHTMLElements;
	img?: Component<any> | keyof SvelteHTMLElements;
	video?: Component<any> | keyof SvelteHTMLElements;
	iframe?: Component<any> | keyof SvelteHTMLElements;
	h1?: Component<any> | keyof SvelteHTMLElements;
	h2?: Component<any> | keyof SvelteHTMLElements;
	h3?: Component<any> | keyof SvelteHTMLElements;
	h4?: Component<any> | keyof SvelteHTMLElements;
	h5?: Component<any> | keyof SvelteHTMLElements;
	h6?: Component<any> | keyof SvelteHTMLElements;
	p?: Component<any> | keyof SvelteHTMLElements;
	ul?: Component<any> | keyof SvelteHTMLElements;
	ol?: Component<any> | keyof SvelteHTMLElements;
	li?: Component<any> | keyof SvelteHTMLElements;
	list_item_child?: Component<any> | keyof SvelteHTMLElements | null;
	table?: Component<any> | keyof SvelteHTMLElements;
	table_head?: Component<any> | keyof SvelteHTMLElements;
	table_body?: Component<any> | keyof SvelteHTMLElements;
	table_row?: Component<any> | keyof SvelteHTMLElements;
	table_cell?: Component<any> | keyof SvelteHTMLElements;
	table_header_cell?: Component<any> | keyof SvelteHTMLElements;
	blockquote?: Component<any> | keyof SvelteHTMLElements;
	bold?: Component<any> | keyof SvelteHTMLElements;
	italic?: Component<any> | keyof SvelteHTMLElements;
	superscript?: Component<any> | keyof SvelteHTMLElements;
	subscript?: Component<any> | keyof SvelteHTMLElements;
	underline?: Component<any> | keyof SvelteHTMLElements;
	code?: Component<any> | keyof SvelteHTMLElements;
	code_block?: Component<any> | keyof SvelteHTMLElements;
}

export interface RendererType extends NodeRendererType {
	Asset?: AssetRendererType;
	embed?: {
		[key: string]: Component<any> | keyof SvelteHTMLElements | undefined;
	};
	link?: {
		[key: string]: Component<any> | keyof SvelteHTMLElements | undefined;
	};
}
