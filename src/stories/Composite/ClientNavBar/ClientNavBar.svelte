<!-- Implementation for Client's Page Navbar -->

<script>
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import Patrick from '$lib/assets/PatrickLogo.svelte';
  import Button from "$sb/Example/Button/Button.svelte";
  import { mode } from "mode-watcher";
  import { cn } from "$lib/utils.js";
  import DarkMode from "$sb/Composite/DarkMode/DarkMode.svelte";
  import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";

  // let {
  //   classes = [],
  // } = $props();
  let headerClasses = [
    "w-full",
    "flex",
    "justify-between",
    // "md:justify-evenly",
    "p-2",
    "md:p-3",
    "shadow-xl"
  ]

  let logoWidth = '160px';
</script>

<header class={cn(...headerClasses)}>
  <NavigationMenu.Root viewport={false}>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <a href="/" class={["block", `w-[${logoWidth}]`, "p-2"].join(' ')}>
          <Patrick mode={mode.current}/>
        </a>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>

  <NavigationMenu.Root viewport={false} classes={cn(["hidden"].join())}>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Link>
          {#snippet child()}
           <a href="/docs" class={navigationMenuTriggerStyle()}>Docs</a>
          {/snippet}
        </NavigationMenu.Link>
        <NavigationMenu.Link>
          {#snippet child()}
           <a href="/docs" class={navigationMenuTriggerStyle()}>Docs</a>
          {/snippet}
        </NavigationMenu.Link>
        <NavigationMenu.Link>
          {#snippet child()}
           <a href="/docs" class={navigationMenuTriggerStyle()}>Docs</a>
          {/snippet}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>

  <NavigationMenu.Root viewport={false}>
    <NavigationMenu.List class={cn([`md:w-[${logoWidth}]`, "md:justify-end"].join(' '))}>
      <NavigationMenu.Item>
        <DarkMode />
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
</header>
