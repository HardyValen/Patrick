<script>
  import Button, { buttonVariants } from "$lib/components/ui/button/button.svelte";
  import * as Drawer from "$lib/components/ui/drawer";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import Menu from "@lucide/svelte/icons/menu";
  import CloseIcon from "@lucide/svelte/icons/x";
  import Search from '@lucide/svelte/icons/search';
  import DarkMode from "$sb/Composite/DarkMode";
  import { Separator } from "$lib/components/ui/separator";
  import Patrick from '$lib/assets/PatrickLogo.svelte';
  import { cn } from "$lib/utils.js";
  import { mode } from "mode-watcher";

  let a11yText = "Open Menu";
</script>

<Drawer.Root
  direction="right"
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
    <Drawer.Header>
      <div class={cn(
        "flex", "justify-between"
      )}>
        <div>
          <a href="/" class={cn("block", "p-2", "w-40")}>
            <Patrick mode={mode.current}/>
          </a>
        </div>
        <div class="flex gap-2">
          <Button variant="outline" size="icon">
            <Search />
          </Button>
          <Drawer.Close class={cn(
            buttonVariants({variant:"outline", size:"icon"})
          )}>
            <CloseIcon />
          </Drawer.Close>
        </div>
      </div>
    </Drawer.Header>
    <Separator />
    <Drawer.Footer>
      <DarkMode />
    </Drawer.Footer>
  </Drawer.Content>
</Drawer.Root>
