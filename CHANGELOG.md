# rich-text-svelte-renderer

## 2.0.4

### Patch Changes

- 85ccc1c: iFrame src issue: replaced escapeHTML with encodeURI

## 2.0.3

### Patch Changes

- ea59c03: Dont know what I did but, release a new version plz

## 2.0.2

### Patch Changes

- 780d9f2: Remove Suppress Warnings

## 2.0.2

### Patch Changes

- 9eb760c: Pass content to component so that static content can be parsed for things like slugifying headings

## 2.0.1

### Patch Changes

- 780fb83: Added support for superscript and subscript elements

## 2.0.0

### Major Changes

- 52d5038: # Svelte 5 Upgrade

  Updated to use Svelte 5 Runes.

  - You can now pass in valid HTMLTags instead of SvelteComponents for Renderers
  - Removed Slug prop. Hoping Svelte 5 fixes the bug that made it necessary but may revert soon.

## 1.0.0

### Major Changes

- 7933adb: Svelte 4 update

  - Update to support Svelte 4
  - Added `slug` prop to prevent error on CSR in Sveltekit
  - Updated Types/linting
  - removed unused code
  - updated package exports
