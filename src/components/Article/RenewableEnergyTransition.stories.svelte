<script context="module">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import RenewableEnergyTransition from './RenewableEnergyTransition.svelte';
</script>

<Meta
  title="Articles/Renewable Energy"
  component="{RenewableEnergyTransition}"
  parameters="{{
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'An interactive article about the global transition to renewable energy.',
      },
    },
  }}"
/>

<Template let:args>
  <div class="story-wrapper">
    <RenewableEnergyTransition {...args} />
  </div>
</Template>

<Story
  name="Default"
  args="{{
    title: "The Global Shift: Tracking Renewable Energy's Rise",
    authors: ['Your Name'],
    publishDate: new Date().toISOString(),
    heroPhotoSrc: 'https://placehold.co/1200x800',
    heroPhotoCaption:
      'Solar panels and wind turbines at sunset, representing the transition to renewable energy',
  }}"
/>

<style>
  .story-wrapper {
    min-height: 100vh;
    background-color: white;
  }
</style>
