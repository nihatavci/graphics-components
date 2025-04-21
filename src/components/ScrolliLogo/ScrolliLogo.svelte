<!-- @component `ScrolliLogo` -->
<script lang="ts">
  /** CSS width value */
  export let width: string = '100%';
</script>

<div style="width: {width}">
  <img
    src="/scrolli-logo/logo.svg"
    alt="Scrolli Logo"
    style="width: 100%; height: auto;"
  />
</div>

<style>
  div {
    display: inline-block;
  }

  img {
    display: block;
  }
</style>
