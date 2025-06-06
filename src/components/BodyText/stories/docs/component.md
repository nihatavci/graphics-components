The `BodyText` creates the main text of your page. You can pass the `text` prop a [markdown-formatted](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) string, which will be parsed into paragraphs, headers, lists, blockquotes or whatever else you need.

Use it like this:

```svelte
<script>
  import { BodyText } from '@nihatavci/graphics-components';

  const markdownText = `Bacon ipsum **dolor amet** cow tongue tri-tip.
  
  Biltong turducken ground round kevin [hamburger turkey](https://reuters.com) pig.
  
  Venison shoulder *ham hock ham leberkas*. Flank beef ribs fatback, jerky meatball ham hock.`;
</script>

<BodyText text="{markdownText}" />
```

... or more commonly, you'll use it with a ArchieML doc in the Graphics Kit like this:

```yaml
[blocks]

type: text
text: Lorem ipsum ...

... etc.
:end

[]
```

```svelte
<script>
  import { BodyText } from '@nihatavci/graphics-components';

  import content from '$locales/en/content.json';
</script>

{#each content.blocks as block}
  {#if block.type === 'text'}
    <BodyText text="{block.text}" />
  <!-- ... -->
  {/if}
{/each}
```
