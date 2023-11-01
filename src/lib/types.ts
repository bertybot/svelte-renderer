import type { SvelteComponent } from 'svelte';

type AssetRendererType = {
	application?: typeof SvelteComponent<object>;
	audio?: typeof SvelteComponent<object>;
	font?: typeof SvelteComponent<object>;
	image?: typeof SvelteComponent<object>;
	model?: typeof SvelteComponent<object>;
	text?: typeof SvelteComponent<object>;
	video?: typeof SvelteComponent<object>;
	[key: string]: typeof SvelteComponent<object> | undefined;
};
export type NodeRendererType = {
	a?: typeof SvelteComponent<object>;
	class?: typeof SvelteComponent<object>;
	img?: typeof SvelteComponent<object>;
	video?: typeof SvelteComponent<object>;
	iframe?: typeof SvelteComponent<object>;
	h1?: typeof SvelteComponent<object>;
	h2?: typeof SvelteComponent<object>;
	h3?: typeof SvelteComponent<object>;
	h4?: typeof SvelteComponent<object>;
	h5?: typeof SvelteComponent<object>;
	h6?: typeof SvelteComponent<object>;
	p?: typeof SvelteComponent<object>;
	ul?: typeof SvelteComponent<object>;
	ol?: typeof SvelteComponent<object>;
	li?: typeof SvelteComponent<object>;
	list_item_child?: typeof SvelteComponent<object>;
	table?: typeof SvelteComponent<object>;
	table_head?: typeof SvelteComponent<object>;
	table_body?: typeof SvelteComponent<object>;
	table_row?: typeof SvelteComponent<object>;
	table_cell?: typeof SvelteComponent<object>;
	table_header_cell?: typeof SvelteComponent<object>;
	blockquote?: typeof SvelteComponent<object>;
	bold?: typeof SvelteComponent<object>;
	italic?: typeof SvelteComponent<object>;
	underline?: typeof SvelteComponent<object>;
	code?: typeof SvelteComponent<object>;
	code_block?: typeof SvelteComponent<object>;
	Asset?: AssetRendererType;
	embed?: {
		[key: string]: typeof SvelteComponent<object> | undefined;
	};
	link?: {
		[key: string]: typeof SvelteComponent<object> | undefined;
	};
};
