# ScrolliLogo

A component that displays the Scrolli logo.

## Basic usage

```svelte
<script>
  import { ScrolliLogo } from '@nihatavci/graphics-components';
</script>

<ScrolliLogo />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logoColour` | string | '#000000' | The colour of the logo |
| `textColour` | string | '#212223' | The colour of the text |
| `width` | string | '100%' | CSS width value |

## Examples

### Custom colours

```svelte
<ScrolliLogo logoColour="#0000FF" textColour="#FF0000" />
```

### Custom width

```svelte
<ScrolliLogo width="200px" />
``` 