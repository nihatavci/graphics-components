<script context="module" lang="ts">
  // @ts-ignore raw
  import componentDocs from './stories/docs/component.md?raw';

  import SearchInput from './SearchInput.svelte';

  import { withComponentDocs } from '$lib/docs/utils/withParams.js';

  export const meta = {
    title: 'Components/Controls/SearchInput',
    component: SearchInput,
    ...withComponentDocs(componentDocs),
  };
</script>

<script>
  import { Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <SearchInput {...args} />
</Template>

<Story name="Default" args="{{}}" />
