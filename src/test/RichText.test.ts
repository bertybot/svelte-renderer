import type { RichTextContent } from '@graphcms/rich-text-types';

import RichText from '$lib/RichText.svelte';
import { describe, it, expect, afterEach } from 'vitest';
import { render } from '@testing-library/svelte';
import {
	defaultContent as content,
	imageContent,
	videoContent,
	listContent,
	iframeContent,
	inlineContent,
	emptyContent,
	embedAssetContent,
	simpleH1Content,
	tableContent
} from './content.js';
import TestRichText from './testComponents/TestRichText.svelte';
import TestRichTextClass from './testComponents/TestRichTextClass.svelte';


//Svelte does this spacing stuff that makes the snapshots look weird but these are the same tests
describe('rich-text-svelte-renderer', () => {
	afterEach(() => {
		document.body.innerHTML = '';
	});
	it('renders content', () => {
		render(RichText, {
			target: document.body,
			props: {
				content
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders content correctly if received a object with children', () => {
		const contentObject: RichTextContent = {
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

		render(RichText, {
			target: document.body,
			props: {
				content: contentObject
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('should not render elements if received a object with empty children', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: emptyContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('should render a table', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: tableContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('should should render H1 with some text', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: simpleH1Content
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders content with custom elements', () => {
		render(RichText, {
			target: document.body,
			props: {
				content,
				renderers: {
					p: TestP,
					bold: TestBold
				}
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders inline content', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: inlineContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders inline content with custom renderers', () => {
		render(TestRichText, {
			target: document.body,
			props: {
				content: inlineContent,
			},
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders link', () => {
		const linkContent: RichTextContent = [
			{
				type: 'link',
				id: 'test',
				rel: 'noreferrer',
				href: 'https://hygraph.com',
				title: 'Hygraph website',
				className: 'text-white',
				openInNewTab: true,
				children: [
					{
						text: 'Hygraph'
					}
				]
			}
		];

		render(RichText, {
			target: document.body,
			props: {
				content: linkContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders iframe', () => {
		const iframeContent: RichTextContent = [
			{
				url: 'https://www.youtube.com/watch?v=Ylmd737tw5w',
				type: 'iframe',
				children: [
					{
						text: ''
					}
				]
			}
		];

		render(RichText, {
			target: document.body,
			props: {
				content: iframeContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders class', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: iframeContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders class with custom renderer', () => {
		render(TestRichTextClass, {
			target: document.body,
			props: {
				content: iframeContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders image', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: imageContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('removes the width and height attributes if they are set to 0', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: [
					{
						src: 'https://media.graphassets.com/bFyCrmvuQfO7n0l5ZmH5',
						type: 'image',
						title: 'logo.svg',
						width: 0,
						handle: 'mQeGmwkXTnqTfcgUXVr7',
						height: 0,
						children: [
							{
								text: ''
							}
						],
						mimeType: 'image/svg+xml'
					}
				]
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders image with custom renderer', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: imageContent,
				renderers: {
					img: TestImage
				}
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders video', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: videoContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('renders lists', () => {
		render(RichText, {
			target: document.body,
			props: {
				content: listContent
			}
		});
		expect(document.body).toMatchSnapshot();
	});

	it('should render HTML and JSX tags correctly', () => {
		const content: RichTextContent = [
			{ type: 'paragraph', children: [{ text: '<Test />', code: true }] }
		];

		render(RichText, {
			target: document.body,
			props: {
				content: content
			}
		});
		expect(document.body.innerHTML).toContain('<Test />');
	});

	it('should render empty text spaces', () => {
		const content: RichTextContent = [
			{
				type: 'paragraph',
				children: [
					{ text: 'Sweet black ' },
					{ bold: true, text: 'cap' },
					{ text: ' ' },
					{ text: 'with', underline: true },
					{ text: ' ' },
					{ text: 'embroidered', italic: true },
					{ text: ' ' },
					{ bold: true, text: 'Hygraph' },
					{ text: ' logo.' }
				]
			}
		];

		render(RichText, {
			target: document.body,
			props: {
				content: content
			}
		});

		expect(document.body).toMatchSnapshot();
	});

	it('should replace all \n in a string with <br /> elements', () => {
		const content: RichTextContent = [
			{
				type: 'paragraph',
				children: [
					{
						text: "Hello,\n⁠My name is joão pedro,\n⁠I'm testing a bug"
					}
				]
			}
		];

		render(RichText, {
			target: document.body,
			props: {
				content: content
			}
		});

		expect(document.body).toMatchSnapshot();
	});
});

describe('custom embeds and assets', () => {
	afterEach(() => {
		document.body.innerHTML = '';
	});
	it('should render video, image, and audio assets', () => {
		const references = [
			{
				id: 'cknjbzowggjo90b91kjisy03a',
				url: 'https://media.graphassets.com/dsQtt0ARqO28baaXbVy9',
				mimeType: 'image/png'
			},
			{
				id: 'ckrus0f14ao760b32mz2dwvgx',
				url: 'https://media.graphassets.com/7M0lXLdCQfeIDXnT2SVS',
				mimeType: 'video/mp4'
			},
			{
				id: 'ckryzom5si5vw0d78d13bnwix',
				url: 'https://media.graphassets.com/H9eZ7CISSBpAKxqdSwzg',
				mimeType: 'audio/mpeg'
			}
		];

		render(RichText, {
			target: document.body,
			props: {
				content: embedAssetContent,
				references
			}
		});

		expect(document.body).toMatchSnapshot();
	});
});
