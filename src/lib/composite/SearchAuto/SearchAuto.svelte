<script>
  import { cn } from "$lib/utils.js";
  // import { typographyVariants } from "$lib";
  import * as Command from "$lib/components/ui/command";

  let {
    value: query = $bindable({
      formatted: {},
    }),
    items: commandItems,
  } = $props();

  let commandListHidden = $state(true);
  let commandRootElmt = $state(null);
  let commandInputValue = $state("");
  let inputValue = $state("");

  // ===================================
  // Command Element Functions
  // ===================================
  function handleCommandOnFocus() {
    commandListHidden = false;
  }

  function handleCommandKeydown(e) {
    if (e.key === "Enter") {
      commandListHidden = true;
      e.target.blur();
      return;
    }

    if (e.key === "Escape") {
      commandListHidden = true;
      e.target.blur();
      return;
    }

    commandListHidden = false;
    return;
  }

  function handleCommandItemClick(e) {
    let {group, value, quantity} = e.target.dataset;
    if (quantity === "single") {
      commandInputValue = value;
      query.formatted[group] = value;
    } else {
      query.formatted[group] = [...new Set([value].concat(query.formatted[group] ?? []))];
    };
    commandListHidden = true;
    commandRootElmt.focus();
  }

  // ===================================
  // Command Input Functions
  // ===================================

  function handleInputKeydown(e) {
    if (e.key === "Enter") {
      commandListHidden = true;
      e.target.blur();
      return;
    }

    if (e.key === "Escape") {
      commandListHidden = true;
      e.target.blur();
      return;
    }

    commandListHidden = false;
    return;
  }

  // ==========================
  // Other Functions
  // ==========================
  function handleOutsideClick(e) {
    // if (commandRootElmt && !commandRootElmt.contains(e.target)) {
    //   commandListHidden = true;
    //   commandRootElmt.focus();
    // }
  }

  function determineQuantity(key) {
    let singles = ["titles"];
    if (singles.includes(key)) {
      return "single";
    } else {
      return "multiple";
    };
  }

</script>

<!-- {JSON.stringify(query.formatted)} -->

<svelte:body onclick={handleOutsideClick}/>

<input
  class={cn(
    "border-red-500 border-1"
  )}
  bind:this={inputElmt}
  onkeydown={handleInputKeydown}
/>
<Command.Root bind:ref={commandRootElmt}>
  <Command.Input
    placeholder="Type a command or search..."
    onfocus={handleCommandOnFocus}
    onkeydown={handleCommandKeydown}
    bind:value={commandInputValue}
  />
    <!-- onblur={handleCommandOnBlur} -->
  <Command.List class={commandListHidden ? "hidden" : ""}>
    <!-- <Command.Empty>No results found.</Command.Empty> -->
    {#each Object.entries(commandItems) as [group, items], idx}
      <Command.Group heading={group}>
        {#each items as item}
          <Command.Item
            class="cursor-pointer"
            onclick={handleCommandItemClick}
            data-quantity={determineQuantity(group)}
          >
            {item}
          </Command.Item>
        {/each}
        {#if idx < (Object.entries(commandItems).length - 1)} <Command.Separator /> {/if}
      </Command.Group>
    {/each}
  </Command.List>
</Command.Root>
