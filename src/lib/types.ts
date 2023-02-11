import type {SvelteComponent} from 'svelte';

type AssetRendererType = {
    application?: typeof SvelteComponent;
    audio?: typeof SvelteComponent;
    font?: typeof SvelteComponent;
    image?: typeof SvelteComponent;
    model?: typeof SvelteComponent;
    text?: typeof SvelteComponent;
    video?: typeof SvelteComponent;
    [key:string]: typeof SvelteComponent | undefined;
}
export type NodeRendererType = {
    a?: typeof SvelteComponent;
    class?: typeof SvelteComponent;
    img?: typeof SvelteComponent;
    video?: typeof SvelteComponent;
    iframe?:typeof SvelteComponent;
    h1?:typeof SvelteComponent;
    h2?: typeof SvelteComponent;
    h3?: typeof SvelteComponent;
    h4?: typeof SvelteComponent;
    h5?: typeof SvelteComponent;
    h6?: typeof SvelteComponent;
    p?: typeof SvelteComponent;
    ul?:typeof SvelteComponent;
    ol?: typeof SvelteComponent;
    li?: typeof SvelteComponent;
    list_item_child?: typeof SvelteComponent;
    table?: typeof SvelteComponent;
    table_head?: typeof SvelteComponent;
    table_body?: typeof SvelteComponent;
    table_row?:typeof SvelteComponent;
    table_cell?:typeof SvelteComponent;
    table_header_cell?:typeof SvelteComponent;
    blockquote?: typeof SvelteComponent;
    bold?: typeof SvelteComponent;
    italic? : typeof SvelteComponent;
    underline? : typeof SvelteComponent;
    code?: typeof SvelteComponent;
    code_block?: typeof SvelteComponent;
    Asset?: AssetRendererType;
    embed?: {
        [key:string]: typeof SvelteComponent | undefined;
    },
    link?: {
        [key:string]: typeof SvelteComponent | undefined;
    }
    
}