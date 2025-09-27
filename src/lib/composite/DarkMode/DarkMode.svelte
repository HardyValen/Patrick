<script>
  import SunIcon from "@lucide/svelte/icons/sun";
  import MoonIcon from "@lucide/svelte/icons/moon";
  import { mode, toggleMode } from "mode-watcher";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { buttonVariants } from "$lib/components/ui/button";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import Button from "$lib/components/ui/button/button.svelte";
</script>


<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Button onclick={toggleMode} variant="outline" size="icon">
        <SunIcon
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
        />
        <MoonIcon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Toggle Light / Dark Mode</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
