<script>
  import Button, { buttonVariants } from "$lib/components/ui/button/button.svelte";
  import * as Drawer from "$lib/components/ui/drawer";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import * as Accordion from "$lib/components/ui/accordion";
  import Menu from "@lucide/svelte/icons/menu";
  import CloseIcon from "@lucide/svelte/icons/x";
  import DarkMode from "$sb/Composite/DarkMode";
  // import { Separator } from "$lib/components/ui/separator";
  import Patrick from '$lib/assets/PatrickLogo.svelte';
  import { cn } from "$lib/utils.js";
  import { mode } from "mode-watcher";
  import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
  import { typographyVariants } from "$lib/typographyVariants";

  let {
    data: navLinksData = [],
    ref = $bindable(null),
    class: className,
    ...restProps
  } = $props();

  let a11yText = "Open Menu";
</script>

<Drawer.Root
  bind:this={ref}
  class={cn(className)}
  {...restProps}
>
  <Drawer.Trigger>

    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger class={buttonVariants({variant:"outline", size:"icon"})}>
            <Menu
              class="h-[1.2rem] w-[1.2rem]"
            />
            <span class="sr-only">{a11yText}</span>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <p>{a11yText}</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>

  </Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header class="border-b-1">
      <div class={cn(
        "flex", "justify-between"
      )}>
        <div>
          <a href="/" class={cn("block", "p-2", "w-40")}>
            <Patrick mode={mode.current}/>
          </a>
        </div>
        <div class="flex gap-2">
          <Drawer.Close class={cn(
            buttonVariants({variant:"outline", size:"icon"})
          )}>
            <CloseIcon />
          </Drawer.Close>
        </div>
      </div>
    </Drawer.Header>

    <!-- Drawer Items -->
    <div
      class={cn("max-h-full overflow-scroll")}
      style="scrollbar-width: none"
    >

      {#each navLinksData as navLinks}
        {#if !navLinks.dropdown}
          <Drawer.Close class={cn(
            "w-full border-b hover:underline",
            "bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}>
            <a href={navLinks.href}>
              <div class={cn(
                "px-5 py-4 text-sm text-left"
              )}>
                {navLinks.title}
              </div>
            </a>
          </Drawer.Close>
        {:else}
          <Accordion.Root type="multiple">
            <Accordion.Item>
              <Accordion.Trigger class={cn(
                "w-full border-b hover:underline",
                "bg-background hover:bg-accent hover:text-accent-foreground",
                "px-5"
              )}>
                {navLinks.title}
              </Accordion.Trigger>
              <Accordion.Content class={cn(
                "px-5 border-b"
              )}>
                {#each navLinks.dropdown as dropdownItem}
                  <Drawer.Close class={cn(
                    "w-full hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none leading-none no-underline outline-none transition-colors px-2 py-4 text-left"
                  )}>
                  <a href={dropdownItem.href}>
                    <div class={cn(
                      typographyVariants({variant: "header-navbar-title"})
                    )}>
                      {dropdownItem.title}
                    </div>
                    <div class={cn(
                      typographyVariants({variant: "header-navbar-description"})
                    )}>
                      {dropdownItem.description}
                    </div>
                  </a>
                  </Drawer.Close>
                {/each}
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        {/if}
      {/each}
    </div>

    <Drawer.Footer class="border-t-1">
      <DarkMode />
    </Drawer.Footer>
  </Drawer.Content>
</Drawer.Root>
