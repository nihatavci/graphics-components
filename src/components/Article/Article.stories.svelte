<script context="module" lang="ts">
  import Article from './Article.svelte';
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import customWellWidthsDocs from './stories/docs/customWellWidths.md?raw';

  import { withComponentDocs, withStoryDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Page Layout/Article',
    component: Article,
    ...withComponentDocs(componentDocs),
  };
</script>

<script lang="ts">
  import { Template, Story } from '@storybook/addon-svelte-csf';
  import Block from '../Block/Block.svelte';
</script>

<Template let:args>
  <Article {...args} />
</Template>

<Story
  name="Default"
  args="{{
    embedded: false,
    id: '',
  }}"
>
  <Article id="article-story-basic">
    <div class="demo-container">
      <div class="background-label">Article container</div>
      <div class="padding-label"><span>⇤</span>15px padding</div>
    </div>
  </Article>
</Story>

<Story name="Custom columns" {...withStoryDocs(customWellWidthsDocs)}>
  <Article id="article-column-widths-demo">
    <div class="article-boundaries">
      <Block id="section-demo" width="narrower">narrower</Block>
      <Block id="section-demo" width="narrow">narrow</Block>
      <Block id="section-demo">normal</Block>
      <Block id="section-demo" width="wide">wide</Block>
      <Block id="section-demo" width="wider">wider</Block>
      <Block id="section-demo" width="widest">widest</Block>
      <Block id="section-demo" width="fluid">fluid</Block>
    </div>
  </Article>
  <Article
    id="article-column-widths-demo"
    columnWidths="{{
      narrower: 310,
      narrow: 450,
      normal: 550,
      wide: 675,
      wider: 1400,
    }}"
  >
    <div class="article-boundaries custom">
      <Block id="section-demo" width="narrower">narrower*</Block>
      <Block id="section-demo" width="narrow">narrow*</Block>
      <Block id="section-demo">normal*</Block>
      <Block id="section-demo" width="wide">wide*</Block>
      <Block id="section-demo" width="wider">wider*</Block>
      <Block id="section-demo" width="widest">widest</Block>
      <Block id="section-demo" width="fluid">fluid</Block>
    </div>
  </Article>
</Story>

<style lang="scss">
  :global(#article-story-basic, #article-column-widths-demo) {
    width: calc(100% + 30px);
    margin-left: -15px;
  }
  :global(#article-column-widths-demo) {
    background-color: #ddd;
    position: relative;
    margin-bottom: 10px;
  }
  :global(#article-column-widths-demo .article-boundaries) {
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #bbb;
  }
  :global(
      #article-column-widths-demo .article-boundaries.custom div.article-block
    ) {
    background: rgb(211, 132, 123);
  }
  :global(#article-column-widths-demo div.article-block) {
    height: 300px;
    background: #81a1c1;
    margin-bottom: 2px;
    height: 50px;
    padding-left: 3px;
    color: white;
    font-size: 12px;
  }

  div.demo-container {
    height: 300px;
    background: #ccc;
    position: relative;
    font-size: 12px;
    .background-label {
      position: absolute;
      bottom: 0;
      left: 5px;
      color: #666;
    }
    .padding-label {
      position: absolute;
      top: 0;
      left: -17px;
      span {
        font-size: 18px;
      }
    }
  }
</style>
