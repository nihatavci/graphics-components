<script context="module" lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore raw
  import collectionDocs from './stories/docs/collection.md?raw';

  import ReferralBlock from './ReferralBlock.svelte';

  import { withComponentDocs, withStoryDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Page furniture/ReferralBlock',
    component: ReferralBlock,
    ...withComponentDocs(componentDocs),
    argTypes: {
      width: {
        control: 'select',
        options: ['normal', 'wide', 'wider', 'widest', 'fluid'],
      },
      section: {
        control: 'select',
        options: [
          '/world/',
          '/world/europe/',
          '/lifestyle/',
          '/lifestyle/sports/',
          '/legal/',
          '/business/',
          '/business/energy/',
        ],
      },
      number: {
        control: 'select',
        options: [2, 4, 6, 8],
      },
    },
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <ReferralBlock {...args} />
</Template>

<Story
  name="Default"
  args="{{
    section: '/lifestyle/sports/',
    number: 4,
    class: 'fmy-0',
    heading: 'More World Cup coverage',
  }}"
/>

<Story
  name="By collection"
  args="{{
    collection: 'x-trump',
    number: 6,
    class: 'fmy-8',
    heading: 'The latest Trump coverage',
  }}"
  {...withStoryDocs(collectionDocs)}
/>
