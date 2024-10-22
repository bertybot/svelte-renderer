import type { Snippet, SvelteComponent } from 'svelte';

type AssetRendererType = {
	application?: Snippet<[any]>;
	audio?: Snippet<[any]>;
	font?: Snippet<[any]>;
	image?: Snippet<[any]>;
	model?: Snippet<[any]>;
	text?: Snippet<[any]>;
	video?: Snippet<[any]>;
	[key: string]: Snippet<[any]> | undefined;
};
export type NodeRendererType = ElementRendererType & TextRendererType

export type ElementRendererType = {
	a?: Snippet<[any]>
	class?: Snippet<[any]>
	img?: Snippet<[any]>
	image?: Snippet<[any]>
	video?: Snippet<[any]>
	iframe?: Snippet<[any]>
	h1?: Snippet<[any]>
	h2?: Snippet<[any]>
	h3?: Snippet<[any]>
	h4?: Snippet<[any]>
	h5?: Snippet<[any]>
	h6?: Snippet<[any]>
	p?: Snippet<[any]>
	ul?: Snippet<[any]>
	ol?: Snippet<[any]>
	li?: Snippet<[any]>
	list_item_child?: Snippet<[any]>
	table?: Snippet<[any]>
	table_head?: Snippet<[any]>
	table_body?: Snippet<[any]>
	table_row?: Snippet<[any]>
	table_cell?: Snippet<[any]>
	table_header_cell?: Snippet<[any]>
	blockquote?: Snippet<[any]>,
	Asset?: AssetRendererType;
	embed?: {
		[key: string]: Snippet<[any]>
	};
	link?: {
		[key: string]: Snippet<[any]>
	};
}

export type TextRendererType = {
	bold?: Snippet;
	italic?: Snippet;
	underline?: Snippet;
	code?: Snippet;
	code_block?: Snippet<[any]>
}