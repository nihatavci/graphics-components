<script lang="ts">
  export let text: string;
  export let attribution: string;
</script>

<blockquote class="reuters-quote">
  <p>{text}</p>
  <cite>{attribution}</cite>
</blockquote>

<style lang="scss">
  .reuters-quote {
    margin: 2rem 0;
    padding: 1.5rem;
    background-color: #f8f8f8;
    border-left: 4px solid #ff8400;
    font-style: italic;

    p {
      font-size: 1.25rem;
      line-height: 1.6;
      margin: 0 0 1rem 0;
      color: #333;
    }

    cite {
      display: block;
      font-size: 1rem;
      color: #666;
      font-style: normal;

      &:before {
        content: '— ';
      }
    }
  }
</style>
