import type { RichTextContent } from './types';

export function getArrayOfElements(content: RichTextContent) {
    return Array.isArray(content) ? content : content.children;
}