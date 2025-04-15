<script lang="ts">
  import { cn } from "@/utils/tailwind";
  import type { SvelteHTMLElements } from "svelte/elements";

  const { children, ...rest }: SvelteHTMLElements["button"] = $props();
</script>

<button {...rest} class={cn("py-2 px-4 border-1 rounded-lg", rest.class)}>
  {@render children?.()}
</button>
