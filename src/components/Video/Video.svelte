<!-- @component `Video` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-multimedia-video--docs) -->
<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import Controls from './Controls.svelte';
  import GraphicBlock from '../GraphicBlock/GraphicBlock.svelte';
  import type { ContainerWidth } from '../@types/global';

  /// //////////////////////////////////
  /// /////////// Props ////////////////
  /// //////////////////////////////////

  /**
   * Video src
   * @type {string}
   * @required
   */
  export let src: string;

  /**
   * Image to be shown while the video is downloading
   */
  export let poster: string = '';

  /**
   * Whether to wrap the graphic with an aria hidden tag.
   */
  export let hidden: boolean = true;

  /**
   * ARIA description, passed in as a markdown string.
   * @type {string}
   */
  export let ariaDescription: string | null = null;

  /** Add extra classes to the block tag to target it with custom CSS. */
  let cls: string = '';
  export { cls as class };

  /**
   * Title of the graphic
   * @type {string}
   */
  export let title: string | null = null;

  /**
   * Notes to the graphic, passed in as a markdown string.
   * @type {string}
   */
  export let notes: string | null = null;

  /**
   * Description of the graphic, passed in as a markdown string.
   * @type {string}
   */
  export let description: string | null = null;

  /**
   * Width of the block within the article well.
   * @type {string}
   */
  export let width: ContainerWidth = 'normal';

  type PreloadOptions = 'auto' | 'none' | 'metadata';

  /**
   * Set a different width for the text within the text well, for example,
   * "normal" to keep the title, description and notes inline with the rest
   * of the text well. Can't ever be wider than `width`.
   * @type {string}
   */
  export let textWidth: ContainerWidth | null = 'normal';

  /**
   * Preload options. `auto` is ignored if `autoplay` is true. Can also be `none` or `metadata`.
   * @type {string}
   */
  export let preloadVideo: PreloadOptions = 'auto';
  /**
   * Whether the video should loop.
   */
  export let loopVideo: boolean = true;
  /**
   * Whether video should have sound or not.
   */
  export let muteVideo: boolean = true;
  export let allowSoundToAutoplay = false; // for video with sound, whether video should be allowed to autoplay if the user has previously interacted with DOM

  export let playVideoWhenInView = true; // whether the video should play when it comes into view or just on page load
  export let playVideoThreshold = 0.5; // if video plays with intersection observer, how much of it should be into view to start playing
  export let possibleToPlayPause = true; // whether to have the option to pause and play video

  export let showControls = true; // whetner to show the play / pause buttons
  export let hoverToSeeControls = false; // whether you need to hover over the video to see the controls
  export let separateReplayIcon = false; // whether to use a separate replay icon or use the play icon for replay as well
  export let controlsColour = '#333'; // change the colour of the play/pause button
  export let controlsOpacity = 0.5; // change the opacity of the play/pause button
  $: interactiveControlsOpacity = 0;
  export let controlsPosition = 'top left'; // have four options for controls position - top right, top left, bottom right, bottom left

  /// //////////////////////////////////
  /// /////// Internal Logic ///////////
  /// //////////////////////////////////
  // Internal props
  let time = 0;
  let duration;
  let paused = true;
  let clickedOnPauseBtn = false; // special variable to track if user clicked on 'pause' btn to help with audio logic
  $: resetCondition = time >= duration; // - 0.1;

  // Dimensions etc other useful things
  let heightVideo;
  let widthVideo;
  let heightVideoContainer;
  let widthVideoContainer;
  const controlsBorderOffset = 50;

  // For intersection observer
  let intersecting;
  let element;
  let videoElement;

  // For video with sound, check if there has been an interaction with the DOM
  let interactedWithDom = false;
  const setInteractedWithDom = () => {
    interactedWithDom = true;
  };

  // Play the video (with no sound) if it's intersecting; pause when it's no longer intersecting
  $: if (playVideoWhenInView && intersecting && muteVideo) paused = false;
  $: if (playVideoWhenInView && !intersecting) paused = true;
  // Special case for video with sound
  // Only ff you've clicked on play button or interacted with DOM in any way previously, video with audio will play
  $: if (
    allowSoundToAutoplay &&
    playVideoWhenInView &&
    intersecting &&
    !muteVideo &&
    interactedWithDom &&
    !clickedOnPauseBtn // so video doesn't autoplay when coming into view again if paused previously
  ) {
    paused = false;
  }

  $: if (allowSoundToAutoplay && !muteVideo && !interactedWithDom) {
    paused = true;
  }

  $: if (!possibleToPlayPause) showControls = true;

  // To get the pause state passed up from the Controls
  const pausePlayEvent = (e) => {
    const fwdPaused = e.detail.paused;
    const fwdClickedOnPauseBtn = e.detail.clickedOnPauseBtn;
    paused = fwdPaused;
    clickedOnPauseBtn = fwdClickedOnPauseBtn;
  };

  // Warning to missing aria attributes
  if (hidden && !ariaDescription) {
    console.warn(
      'Must provide aria description for video components if hidden is true.'
    );
  }
</script>

<svelte:window
  on:click="{setInteractedWithDom}"
  on:touchstart="{setInteractedWithDom}"
/>

<GraphicBlock
  {textWidth}
  {title}
  {description}
  {notes}
  {width}
  class="video {cls}"
>
  <div
    role="figure"
    on:mouseover="{() => {
      interactiveControlsOpacity = controlsOpacity;
    }}"
    on:focus="{() => {
      interactiveControlsOpacity = controlsOpacity;
    }}"
    on:mouseout="{() => {
      interactiveControlsOpacity = 0;
    }}"
    on:blur="{() => {
      interactiveControlsOpacity = 0;
    }}"
  >
    {#if (hidden && ariaDescription) || !hidden}
      {#if ariaDescription}
        <p class="visually-hidden">{ariaDescription}</p>
      {/if}

      {#if playVideoWhenInView}
        <!-- Video element with Intersection Observer -->
        <IntersectionObserver
          {element}
          bind:intersecting
          threshold="{playVideoThreshold}"
          once="{false}"
        >
          <div
            bind:this="{element}"
            class="video-wrapper relative block"
            aria-hidden="{hidden}"
            bind:clientWidth="{widthVideoContainer}"
            bind:clientHeight="{heightVideoContainer}"
          >
            {#if possibleToPlayPause}
              {#if showControls}
                <Controls
                  on:pausePlayEvent="{pausePlayEvent}"
                  {paused}
                  {clickedOnPauseBtn}
                  controlsOpacity="{hoverToSeeControls ?
                    interactiveControlsOpacity
                  : controlsOpacity}"
                  {controlsPosition}
                  {widthVideoContainer}
                  {heightVideoContainer}
                  {controlsBorderOffset}
                  {resetCondition}
                  {separateReplayIcon}
                  {controlsColour}
                />
              {:else}
                <button
                  class="border-0 m-0 p-0 bg-transparent absolute"
                  on:click="{() => {
                    if (paused === true) {
                      paused = false;
                    } else {
                      paused = true;
                    }
                  }}"
                  style="top: 0; left: 0; width: {widthVideoContainer}px; height: {heightVideoContainer}px;"
                ></button>
              {/if}
            {/if}
            <video
              bind:this="{videoElement}"
              {src}
              {poster}
              class="pointer-events-none relative"
              width="100%"
              muted="{muteVideo}"
              playsinline
              preload="{preloadVideo}"
              loop="{loopVideo}"
              bind:currentTime="{time}"
              bind:duration
              bind:paused
              bind:clientWidth="{widthVideo}"
              bind:clientHeight="{heightVideo}"
            >
              <track kind="captions" />
            </video>
          </div>
        </IntersectionObserver>
      {:else}
        <!-- Video element without Intersection observer -->
        <div
          class="video-wrapper relative"
          aria-hidden="{hidden}"
          bind:clientWidth="{widthVideoContainer}"
          bind:clientHeight="{heightVideoContainer}"
        >
          {#if possibleToPlayPause}
            {#if showControls}
              <Controls
                on:pausePlayEvent="{pausePlayEvent}"
                {paused}
                {clickedOnPauseBtn}
                {controlsOpacity}
                {controlsPosition}
                {widthVideoContainer}
                {heightVideoContainer}
                {controlsBorderOffset}
                {resetCondition}
                {separateReplayIcon}
                {controlsColour}
              />
            {:else}
              <button
                class="border-0 m-0 p-0 bg-transparent absolute"
                on:click="{() => {
                  if (paused === true) {
                    paused = false;
                  } else {
                    paused = true;
                  }
                }}"
                style="top: 0; left: 0; width: {widthVideoContainer}px; height: {heightVideoContainer}px;"
              ></button>
            {/if}
          {/if}
          <video
            bind:this="{videoElement}"
            {src}
            {poster}
            class="pointer-events-none relative"
            width="100%"
            muted="{muteVideo}"
            playsinline
            preload="{preloadVideo}"
            loop="{loopVideo}"
            bind:currentTime="{time}"
            bind:duration
            bind:paused
            autoplay
            bind:clientWidth="{widthVideo}"
            bind:clientHeight="{heightVideo}"
          >
            <track kind="captions" />
          </video>
        </div>
      {/if}
    {/if}
  </div>
  {#if $$slots.notes}
    <!-- Custom notes and source slot -->
    <slot name="notes" />
  {/if}
</GraphicBlock>
