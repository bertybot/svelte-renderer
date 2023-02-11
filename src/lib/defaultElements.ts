
import type { NodeRendererType } from "./types";
import { Class, Link, Video, Image, IFrame, Audio} from "./Elements";
import CodeBlock from "./Elements/CodeBlock.svelte";
import { Bold, Code, Italic, Underline } from "./TextRenderers";
import { htmlDefaultElements } from "./HtmlElements";
import Fallback from "./Elements/Fallback.svelte";


export const defaultElements: Required<NodeRendererType> = {
    a: Link,
    class: Class,
    video: Video,
    img: Image,
    iframe: IFrame,
    bold: Bold,
    italic: Italic,
    underline: Underline,
    code: Code,
    code_block: CodeBlock,
    ...htmlDefaultElements,
    Asset: {
        audio: Audio,
        image: Image,
        video: Video,
        font: Fallback,
        application: Fallback,
        model: Fallback,
        text:Fallback
    },
    embed: {},
    link: {}
    
}