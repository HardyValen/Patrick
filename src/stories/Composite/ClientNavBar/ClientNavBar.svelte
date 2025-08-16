<!-- Implementation for Client's Page Navbar -->

<script>
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import { Separator } from "$lib/components/ui/separator";
  import Patrick from '$lib/assets/PatrickLogo.svelte';
  import Search from  '@lucide/svelte/icons/search';
  import { Button } from "$lib/components/ui/button";
  import { mode } from "mode-watcher";
  import { cn } from "$lib/utils.js";
  import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
  import { DarkMode, ClientNavDrawer } from "$composite";
  import NavLinksData from "./ClientNavBar.data.ts";

</script>

<header class={cn("w-full bg-background sticky top-0 z-1")}>

  <div class={cn(
      "flex",
      "justify-between",
      "items-center",
      "py-2",
      "px-(--px-lpage) md:px-(--px-lpage-md) xl:px-(--px-lpage-xl)",
      "w-full",
    )}>
      <!-- Logo -->
      <a href="/" class={cn("block")}>
        <Patrick mode={mode.current}/>
      </a>

      <!-- Navigation Lists -->
      <NavigationMenu.Root viewport={false}>
        <NavigationMenu.List class={cn('h-full', 'max-md:hidden')}>
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

          <!-- Try Dropdown -->
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              Hello
            </NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <NavigationMenu.Link>
                  Hello
                </NavigationMenu.Link>
              </NavigationMenu.Content>
          </NavigationMenu.Item>
          <!-- End of Dropdown -->
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div class={cn(
        "flex", "md:justify-end",
        "md:min-w-20", "gap-2"
      )}>
        <div class={cn("max-md:hidden")}>
          <DarkMode />
        </div>
        <div class={cn("max-md:hidden")}>
          <Button variant="outline" size="icon">
            <Search />
          </Button>
        </div>
        <div class={cn("md:hidden")}>
          <ClientNavDrawer />
        </div>
      </div>
  </div>
</header>
