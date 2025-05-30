Add programmatic ads inline on your page.

> **IMPORTANT!** Make sure ads are only used on dotcom pages, never on embeds.

```svelte
<!-- +page.svelte -->
<script>
  import { AdScripts } from '@nihatavci/graphics-components';
</script>

<!-- Include AdScripts only ONCE per page for any type of ad -->
<AdScripts />
```

```svelte
<!-- App.svelte -->
<script>
  import { InlineAd } from '@nihatavci/graphics-components';

  export let embedded = false;
</script>

{#each content.blocks as block}
  <!-- ... -->

  {#if block.Type === 'inline-ad'}
    <!-- Check if in an embed context! -->
    {#if !embedded}
      <InlineAd />
    {/if}
  {/if}

  <!-- ... -->
{/each}
```

You may add **up to three** inline ads per page, but must set the `n` prop on multiple ads in sequential order, 1 - 3.

```svelte
<!-- First inline ad on the page -->
<InlineAd n="{1}" />
<!-- ... second ... -->
<InlineAd n="{2}" />
<!-- ... third and final. -->
<InlineAd n="{3}" />
```
