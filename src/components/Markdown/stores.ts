import { writable } from 'svelte/store';

/**
 * Set to `false` in the browser to ensure Markdown content correctly updates
 * when a SvelteKit app hyrates.
 *
 * @example
 * ```javascript
 * // +layout.js
 * import { staticMarkdown } from '@nihatavci/graphics-components';
 * import { building } from '$app/environment';
 *
 * export const load = async() => {
 *   // Set the store with the value of building.
 *   staticMarkdown.set(building);
 *
 *   // Markdown using this content will correctly refresh when
 *   // a reader loads your page.
 *   const content = await fetchPageContent();
 *
 *   return { content };
 * }
 * ```
 */
export const staticMarkdown = writable(true);
