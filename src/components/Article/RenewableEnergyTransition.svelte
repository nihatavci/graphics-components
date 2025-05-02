<script lang="ts">
  import DatawrapperChart from '../DatawrapperChart/DatawrapperChart.svelte';
  import FeaturePhoto from '../FeaturePhoto/FeaturePhoto.svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import Scroller from '../Scroller/Scroller.svelte';
  import Headline from '../Headline/Headline.svelte';
  import BodyText from '../BodyText/BodyText.svelte';
  import Block from '../Block/Block.svelte';

  // Article metadata
  export let title = "The Global Shift: Tracking Renewable Energy's Rise";
  export let authors = ['Your Name'];
  export let publishDate = new Date().toISOString();

  // Feature photo props
  export let heroPhotoSrc =
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600';
  export let heroPhotoCaption =
    'Solar panels and wind turbines at sunset, representing the transition to renewable energy';

  // Scroller steps with actual chart components
  const scrollerSteps = [
    {
      background: DatawrapperChart,
      backgroundProps: {
        title: 'Global Renewable Energy Capacity',
        frameTitle: 'Chart showing global renewable energy capacity growth',
        ariaLabel: 'Visualization of renewable energy capacity worldwide',
        src: 'https://datawrapper.dwcdn.net/f2P7l/1/',
        width: 'wider',
      },
      foreground: `## The Rise of Renewables

In the past decade, renewable energy has transformed from a niche technology to a mainstream power source. Solar and wind energy have led this revolution, with costs dropping dramatically.`,
      altText:
        'Visualization showing the growth of renewable energy capacity worldwide',
    },
    {
      background: DatawrapperChart,
      backgroundProps: {
        title: 'Cost Comparison',
        frameTitle: 'Chart comparing renewable energy costs',
        ariaLabel:
          'Cost comparison between renewable and fossil fuel energy sources',
        src: 'https://datawrapper.dwcdn.net/f2P7l/1/',
        width: 'wider',
      },
      foreground: `## Economic Transformation

By 2023, renewable energy became cheaper than fossil fuels in most parts of the world. This economic shift has accelerated the transition to clean energy.`,
      altText: 'Chart comparing costs of different energy sources',
    },
    {
      background: DatawrapperChart,
      backgroundProps: {
        title: 'Future Projections',
        frameTitle: 'Chart showing renewable energy projections',
        ariaLabel: 'Projected renewable energy adoption through 2050',
        src: 'https://datawrapper.dwcdn.net/f2P7l/1/',
        width: 'wider',
      },
      foreground: `## Looking Ahead

Experts project that renewable energy could provide up to 90% of global electricity by 2050, marking a fundamental shift in how we power our world.`,
      altText: 'Projection chart showing future renewable energy adoption',
    },
  ];
</script>

<article class="renewable-energy-article">
  <Block width="normal">
    <Headline
      hed="{title}"
      dek="How renewable energy is reshaping the global power landscape"
    />

    <FeaturePhoto
      src="{heroPhotoSrc}"
      altText="Renewable energy infrastructure"
      caption="{heroPhotoCaption}"
      width="wider"
    />

    <BodyText
      text="The global energy landscape is undergoing a dramatic transformation. Renewable energy sources, particularly solar and wind power, are rapidly replacing traditional fossil fuels, driven by technological advances, falling costs, and urgent climate concerns."
    />
  </Block>

  <Block width="wider" class="chart-block">
    <DatawrapperChart
      title="Global Renewable Energy Investment"
      frameTitle="Chart showing global investment in renewable energy"
      ariaLabel="Interactive chart displaying global renewable energy investment trends"
      src="hhttps://datawrapper.dwcdn.net/f2P7l/1/"
      width="wider"
      textWidth="normal"
    />
  </Block>

  <div class="scroller-section">
    <Scroller
      steps="{scrollerSteps}"
      backgroundWidth="wider"
      foregroundPosition="left"
      stackBackground="{true}"
      threshold="{0.5}"
    />
  </div>

  <Block width="wider" class="chart-block">
    <GraphicBlock
      width="wider"
      title="Impact on Carbon Emissions"
      description="The growth of renewable energy has led to significant reductions in carbon emissions across major economies."
    >
      <DatawrapperChart
        frameTitle="Carbon emissions reduction chart"
        ariaLabel="Chart showing carbon emissions reduction due to renewable energy adoption"
        src="https://datawrapper.dwcdn.net/f2P7l/1/"
        width="normal"
      />
    </GraphicBlock>
  </Block>

  <Block width="normal">
    <BodyText
      text="As countries race to meet their climate commitments, the transition to renewable energy has become not just an environmental imperative but an economic opportunity. The next decade will be crucial in determining the pace and scale of this global transformation."
    />
  </Block>
</article>

<style lang="scss">
  .renewable-energy-article {
    width: 100%;
    margin: 0 auto;
    background-color: white;
  }

  .chart-block {
    margin: 4rem auto;
  }

  .scroller-section {
    margin: 6rem 0;
    width: 100%;

    :global(.background) {
      background-color: #f5f5f5;
    }

    :global(.foreground) {
      padding: 2rem;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin: 2rem;
      max-width: 400px;
    }
  }

  :global(h2) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }
</style>
