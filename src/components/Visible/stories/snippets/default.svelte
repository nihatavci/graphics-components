<script>
  import { Visible } from '@nihatavci/graphics-components';
</script>

<Visible let:visible>
  {#if visible}
    <p>Visible!</p>
  {:else}
    <p>Not yet visible.</p>
  {/if}
</Visible>
