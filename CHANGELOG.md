# rich-text-svelte-renderer

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
