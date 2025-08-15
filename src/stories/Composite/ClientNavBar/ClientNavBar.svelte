<!-- Implementation for Client's Page Navbar -->

<script>
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import { Separator } from "$lib/components/ui/separator";
  import Patrick from '$lib/assets/PatrickLogo.svelte';
  import { mode } from "mode-watcher";
  import { cn } from "$lib/utils.js";
  import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
  import { DarkMode, ClientNavDrawer} from "$composite";
</script>

<header class={cn("w-full bg-background")}>
  <NavigationMenu.Root viewport={false}>
    {#snippet child()}
      <div class={cn([
          "flex",
          "justify-between",
          "py-2",
          "px-(--px-lpage) md:px-(--px-lpage-md) xl:px-(--px-lpage-xl)",
          "w-full",
        ].join(' '))}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link>
              {#snippet child()}
                <a href="/" class={cn(["block", "w-[160px]", "p-2"].join(' '))}>
                  <Patrick mode={mode.current}/>
                </a>
              {/snippet}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.List class={cn(['h-full', 'max-md:hidden'].join(' '))}>
          <NavigationMenu.Item>
            <NavigationMenu.Link>
              {#snippet child()}
              <a href="/about" class={navigationMenuTriggerStyle()}>Perusahaan</a>
              {/snippet}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link>
              {#snippet child()}
              <a href="/docs" class={navigationMenuTriggerStyle()}>Hubungi Kami</a>
              {/snippet}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.List class={cn(["md:min-w-[160px]", "md:justify-end", "h-full"].join(' '))}>
          <NavigationMenu.Item>
            <DarkMode />
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <ClientNavDrawer />
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </div>
    {/snippet}
  </NavigationMenu.Root>
</header>
<Separator
  class={cn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px]")}
/>
