<!-- @component Use this file to write stories for your component. -->
<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import ScrolliLogo from './ScrolliLogo.svelte';
  import docs from './stories/docs/component.md?raw';
</script>

<Meta
  title="Components/Logos/ScrolliLogo"
  component="{ScrolliLogo}"
  parameters="{{
    docs: {
      description: {
        component: docs,
      },
    },
  }}"
/>

<Story name="Default">
  <ScrolliLogo />
</Story>

<Story name="Custom colours">
  <ScrolliLogo logoColour="#0000FF" textColour="#FF0000" />
</Story>

<Story name="Custom width">
  <ScrolliLogo width="200px" />
</Story>
