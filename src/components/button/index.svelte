<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  const { children, ...rest }: SvelteHTMLElements["button"] = $props();
</script>

<button {...rest} class="py-2 px-4 border-1 rounded-lg">
  {@render children?.()}
</button>
