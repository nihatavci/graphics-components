<script context="module">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Article from './Article.svelte';
  import Headline from '../Headline/Headline.svelte';
  import Byline from '../Byline/Byline.svelte';
  import FeaturePhoto from '../FeaturePhoto/FeaturePhoto.svelte';
  import BodyText from '../BodyText/BodyText.svelte';
  import Quote from '../Quote/Quote.svelte';
  import SimpleTimeline from '../SimpleTimeline/SimpleTimeline.svelte';
  import PhotoCarousel from '../PhotoCarousel/PhotoCarousel.svelte';
  import EndNotes from '../EndNotes/EndNotes.svelte';
</script>

<script>
  // Storybook controls (args)
  export let headline =
    "Agent Zigzag: The Double Life of Eddie Chapman, WWII's Most Daring Double Agent";
  export let subheadline =
    'How a British safecracker became the only man awarded medals by both the Nazis and MI5.';
  export let byline =
    'By [Your Name], with sources from Warfare History Network and Ekşi Şeyler';
  export let featurePhoto = {
    src: '/images/eddie-chapman-parachute.jpg',
    altText: 'Eddie Chapman parachuting into England',
    caption:
      'Eddie Chapman, aka Agent Zigzag, parachuted into England on a secret mission. (Illustration)',
  };
  export let body = [
    {
      type: 'paragraph',
      text: 'On a cold night in wartime Britain, a parachute drifted silently to earth. The man who landed was not a soldier, but a notorious safecracker—sent by the Nazis to sabotage British industry. What neither side knew was that Eddie Chapman was about to become one of the most audacious double agents in history.',
    },
    {
      type: 'paragraph',
      text: "Born in 1914 in England, Chapman's early life was a blur of petty crime, safe-blowing, and prison stints. By the time World War II erupted, he was locked up in the Channel Islands—soon to be occupied by the Germans.",
    },
    {
      type: 'paragraph',
      text: 'When the Germans took over, Chapman saw an opportunity. He offered his services as a spy, was trained by the Abwehr, and parachuted into England with orders to destroy a vital aircraft factory. Instead, he turned himself in to MI5, offering to work as a double agent.',
    },
    {
      type: 'paragraph',
      text: "MI5 codenamed him 'Zigzag.' Chapman's greatest coup was faking the destruction of the De Havilland factory, convincing the Germans their mission had succeeded. He was even awarded the Iron Cross by the Nazis—an honor rarely given to foreigners.",
    },
    {
      type: 'paragraph',
      text: "Chapman's life became a high-wire act. He fed the Germans false intelligence, misled them about the effectiveness of their V-1 and V-2 rockets, and narrowly avoided exposure multiple times. His charm, criminal cunning, and sheer nerve kept him alive.",
    },
    {
      type: 'paragraph',
      text: 'After the war, Chapman returned to a life of crime, wrote his memoirs, and became a legend. His story, once classified, is now a testament to the strange, shadowy world of wartime espionage.',
    },
  ];
  export let quotes = [
    {
      text: "If I could work a bluff with the Germans, I could probably be sent over to Britain. Perhaps it was phony talk even then, and I don't pretend there were no other motives in the plans I began to turn over in my mind.",
      author: 'Eddie Chapman',
    },
    {
      text: 'The Zigzag case must be closed down at the earliest possible moment.',
      author: 'Major Michael Ryde, MI5',
    },
  ];
  export let timeline = [
    { year: '1914', event: 'Eddie Chapman is born in England.' },
    {
      year: '1930s',
      event: 'Becomes a notorious safecracker and member of the Jelly Gang.',
    },
    {
      year: '1940',
      event: 'Imprisoned in the Channel Islands, occupied by Germany.',
    },
    { year: '1942', event: 'Recruited by the Abwehr, trained as a spy.' },
    {
      year: '1943',
      event:
        "Parachutes into England, surrenders to MI5, becomes double agent 'Zigzag'.",
    },
    {
      year: '1944',
      event: 'Awarded Iron Cross by Nazis; continues double agent work.',
    },
    { year: '1945+', event: 'Returns to crime, writes memoirs, dies in 1997.' },
  ];
  export let carousel = [
    {
      src: '/images/eddie-chapman-mugshot.jpg',
      altText: 'Eddie Chapman mugshot',
      caption: "Chapman's mugshot, taken by British authorities.",
    },
    {
      src: '/images/iron-cross.jpg',
      altText: 'Iron Cross medal',
      caption: 'The Iron Cross, awarded to Chapman by the Nazis.',
    },
    {
      src: '/images/mi5-logo.jpg',
      altText: 'MI5 logo',
      caption:
        'MI5, the British intelligence agency that ran Chapman as a double agent.',
    },
  ];
  export let endnotes = [
    {
      title: 'Sources',
      text: '[Warfare History Network](https://warfarehistorynetwork.com/article/secret-agent-man-the-story-of-eddie-chapman/), [Ekşi Şeyler](https://eksiseyler.com/almanya-ve-ingiltereyi-ayni-anda-ayakta-uyutan-cifte-ajan-eddie-chapman)',
    },
  ];
</script>

<Meta title="Articles/Agent Zigzag" component="{Article}" />

<Template let:args>
  <Article>
    <Headline hed="{args.headline}" dek="{args.subheadline}" />
    <Byline authors="{[args.byline]}" align="center" />
    <FeaturePhoto
      src="{args.featurePhoto.src}"
      altText="{args.featurePhoto.altText}"
      caption="{args.featurePhoto.caption}"
    />
    {#each args.body as section}
      <BodyText text="{section.text}" />
    {/each}
    {#each args.quotes as quote}
      <Quote text="{quote.text}" attribution="{quote.author}" />
    {/each}
    <SimpleTimeline
      dates="{args.timeline.map((t) => ({
        date: t.year,
        events: [{ title: t.event }],
      }))}"
    />
    <PhotoCarousel photos="{args.carousel}" />
    <EndNotes notes="{args.endnotes}" />
  </Article>
</Template>

<Story
  name="Default"
  args="{{
    headline,
    subheadline,
    byline,
    featurePhoto,
    body,
    quotes,
    timeline,
    carousel,
    endnotes,
  }}"
/>
