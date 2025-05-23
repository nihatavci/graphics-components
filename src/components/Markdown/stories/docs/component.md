The Markdown component renders markdown into HTML. That's it!

---

```svelte
<script>
  import { Markdown } from '@nihatavci/graphics-components';
</script>

<Markdown source="{'My markdown **string**!'}" />
```

... well, almost.

Owing to a weird quirk of Svelte's [`@html`](https://svelte.dev/docs/special-tags#html) directive (see [this issue](https://github.com/reuters-graphics/graphics-components/issues/148)), if you want your resulting HTML to be dynamic — e.g., update after a SvelteKit app [hydrates](https://kit.svelte.dev/docs/glossary#hydration) — then you may need to set the included `$staticMarkdown` store to `false` in the browser.

For example, if you're refreshing some data with markdown strings in a SvelteKit project using a [load function](https://kit.svelte.dev/docs/load), set the store to reflect the [`building`](https://kit.svelte.dev/docs/modules#$app-environment-building) variable, which will correctly [prerender](https://kit.svelte.dev/docs/glossary#prerendering) your markdown content AND update it after fresh data is fetched in the browser.

```javascript
// +layout.js
import { staticMarkdown } from '@nihatavci/graphics-components';
import { building } from '$app/environment';

/** @type {import('./$types').LayoutLoad} */
export const load = async () => {
  // Set the staticMarkdown store with the value of building.
  staticMarkdown.set(building);

  // Now this content will correctly refresh when a reader loads your page.
  const resp = await fetch(
    'https://graphics.thomsonreuters.com/data/my-page-content.json'
  );
  const content = await resp.json();

  return { content };
};
```

If you're not updating your markdown content as above, you can safely leave the `$staticMarkdown` store alone and your page will do the right thing.
