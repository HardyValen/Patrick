<script>
  import { buttonVariants } from "$lib/components/ui/button/button.svelte";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import Menu from "@lucide/svelte/icons/menu";

  let a11yText = "Open Menu";
</script>

<Drawer.Root
  direction="top"
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
      <Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
      <Drawer.Description>This action cannot be undone.</Drawer.Description>
    </Drawer.Header>
    <Drawer.Footer>
      <Drawer.Close>Cancel</Drawer.Close>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer.Root>
