<!-- Resizing navbar content width with a formula -->

<!-- Implementation for Client's Page Navbar -->

<script>
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import { Separator } from "$lib/components/ui/separator";
  import Logo from '$lib/assets/nisi-logo.svelte';
  import { Button } from "$lib/components/ui/button";
  import { mode } from "mode-watcher";
  import { cn } from "$lib/utils.js";
  import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
  import { DarkMode, ClientNavDrawer } from "$lib/composite";
  import { typographyVariants } from "$lib";

  let {
    ref = $bindable(null),
		class: className,
		data: navLinksData = [],
		...restProps
  } = $props();

</script>

<header
  class={cn(
    className
  )}
  bind:this={ref}
  {...restProps}
>

  <div
    class={cn(
      "w-full max-w-320 m-auto"
    )}
  >
    <div
      class={cn(
        "flex",
        "justify-between",
        "items-center",
        "w-full",
      )}>
      <!-- Logo -->
      <a href="/" class={cn("block")}>
        <Logo/>
      </a>

      <!-- Navigation Lists -->
      <NavigationMenu.Root viewport={false}>
        <NavigationMenu.List class={cn('h-full', 'max-md:hidden')}>

          {#each navLinksData as navLink}
          <NavigationMenu.Item>
            {#if navLink.dropdown}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>
                {navLink.title}
              </NavigationMenu.Trigger>
                <NavigationMenu.Content class={cn(navLink.classes)}>

                  {#each navLink.dropdown as dropdownItem}
                  <NavigationMenu.Link>
                    {#snippet child()}
                      <div class={cn(dropdownItem.classes)}>
                        <a
                          href={dropdownItem.href}
                          class={cn(
                            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors",
                          )}
                        >
                          <div class={cn(
                            typographyVariants({variant: "header-navbar-title"})
                          )}>
                            {dropdownItem.title}
                          </div>
                          {#if dropdownItem.description}
                          <div class={cn(
                            typographyVariants({variant: "header-navbar-description"})
                          )}>
                            {dropdownItem.description}
                          </div>
                          {/if}
                        </a>
                      </div>
                    {/snippet}
                  </NavigationMenu.Link>
                  {/each}

                </NavigationMenu.Content>
            </NavigationMenu.Item>
            {:else}
            <NavigationMenu.Link>
              {#snippet child()}
                <a href={navLink.href} class={navigationMenuTriggerStyle()}>{navLink.title}</a>
              {/snippet}
            </NavigationMenu.Link>
            {/if}
          </NavigationMenu.Item>
          {/each}

        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div class={cn(
        "flex", "md:justify-end",
        "md:min-w-20", "gap-2"
      )}>
        <div class={cn("max-md:hidden")}>
          <DarkMode />
        </div>
        <div class={cn("md:hidden")}>
          <ClientNavDrawer direction="right" data={navLinksData}/>
        </div>
      </div>

    </div>
  </div>
</header>
