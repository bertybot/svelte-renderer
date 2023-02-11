import type { RichTextContent } from '@graphcms/rich-text-types';

export function getArrayOfElements(content: RichTextContent) {
	return Array.isArray(content) ? content : content.children;
}
