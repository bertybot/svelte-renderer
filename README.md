# rich-text-svelte-renderer

Svelte port of @hygraph's Rich text renderer. [link](https://github.com/hygraph/rich-text/blob/main/packages/react-renderer/README.md) .

## Getting Started

You can get it on npm or Yarn.

```sh
# npm
npm i rich-text-svelte-renderer

# Yarn
yarn add rich-text-svelte-renderer

# pnpm
pnpm i rich-text-svelte-renderer
```

## 🔥 Usage/Examples

To render the content on your application, you'll need to provide the array of elements returned from the Hygraph API to the `RichText` component. The content has to be returned in `raw` (or `json`) format as the AST representation. For more information on how to query the Rich Text content, [check our documentation](https://hygraph.com/docs/api-reference/schema/field-types#rich-text).

````svelte
<script>
	import { RichText } from 'rich-text-svelte-renderer';

	const content = {
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
</script>

<RichText {content} />

The content from the example above will render: ```html
<p>
	<b>Hello world!</b>
</p>
````

## Custom elements

By default, the elements won't have any styling, despite the `IFrame`, which we designed to be responsive. But if you have, for example, a design system and wants to use your own components with styling, you can pass a `renderers` prop to the `RichText` component. Let's see an example:

```svelte
<script>
	import { RichText } from 'rich-text-svelte-renderer';
	import newH1 from './newH1.svelte';
	const content = {
		/* ... */
	};
</script>

<RichText
	{content}
	renderers={{
		h1: newH1
	}}
/>
```

Below you can check the full list of elements you can customize, alongside the props available for each of them.

- `a`
  - `children`: SvelteComponent;
  - `href`: string;
  - `className`: string;
  - `rel`: string;
  - `id`: string;
  - `title`: string;
  - `openInNewTab`: boolean;
- `class`
  - `children`: SvelteComponent;
  - `className`: string;
- `img`
  - `src`: string;
  - `title`: string;
  - `width`: number;
  - `height`: number;
  - `mimeType`: ImageMimeTypes;
  - `altText`: string;
- `video`
  - `src`: string;
  - `title`: string;
  - `width`: number;
  - `height`: number;
- `iframe`
  - `url`: string;
  - `width`: number;
  - `height`: number;
- `h1`
  - `children`: SvelteComponent;
- `h2`
  - `children`: SvelteComponent;
- `h3`
  - `children`: SvelteComponent;
- `h4`
  - `children`: SvelteComponent;
- `h5`
  - `children`: SvelteComponent;
- `h6`
  - `children`: SvelteComponent;
- `p`
  - `children`: SvelteComponent;
- `ul`
  - `children`: SvelteComponent;
- `ol`
  - `children`: SvelteComponent;
- `li`
  - `children`: SvelteComponent;
- `table`
  - `children`: SvelteComponent;
- `table_head`
  - `children`: SvelteComponent;
- `table_header_cell`
  - `children`: SvelteComponent;
- `table_body`
  - `children`: SvelteComponent;
- `table_row`
  - `children`: SvelteComponent;
- `table_cell`
  - `children`: SvelteComponent;
- `blockquote`
  - `children`: SvelteComponent;
- `bold`
  - `children`: SvelteComponent;
- `italic`
  - `children`: SvelteComponent;
- `underline`
  - `children`: SvelteComponent;
- `code`
  - `children`: SvelteComponent;
- `code_block`
  - `children`: SvelteComponent;

### Custom Embeds/Assets

Depending on your reference query and model, fields may change, which applies to types. To have a better DX using the package, we have `EmbedProps` and `LinkEmbedProps` types that you can import from `@graphcms/rich-text-types` (you may need to install it if you don't have done it already).

In this example, we have seen how to write a renderer for a `Post` model, but it applies the same way to any other model and `Asset` on your project.

```svelte
<script lang="ts">
	import type { EmbedProps, LinkEmbedProps } from '@graphcms/rich-text-types';

	type Post = {
		title: string;
		slug: string;
		description: string;
	};

	import Post from './Post.svelte';
	import PostLink from './PostLink.svelte';

	const content = {
		/* ... */
	};
</script>

<RichText
	{content}
	renderers={{
		embed: {
			Post
		},
		link: {
			Post: PostLink
		}
	}}
/>
```

## 📝 License

Licensed under the MIT License.

---

Made with 💜 by Bert Bengtson
