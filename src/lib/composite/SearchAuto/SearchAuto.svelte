<script>
  import { cn, stringify } from "$lib/utils.js";
  // import { typographyVariants } from "$lib";
  import * as Command from "$lib/components/ui/command";
  import { Command as CommandPrimitive } from "bits-ui";

  let {
    items: commandItems,
    onCommandItemClick = () => {},
    showInput = true,
    showComponent = false,
    inputRef = $bindable(null),
    ref: commandRootElmt = $bindable(null),
    value: commandInputValue,
    class: className
  } = $props();

  let commandListHidden = $state(false);
  let inputValue = $state("");

  // ===================================
  // Command Element Functions
  // ===================================

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

  // ==========================
  // Other Functions
  // ==========================
  function handleOutsideClick(e) {
    // if (commandRootElmt && !commandRootElmt.contains(e.target)) {
    //   console.log(commandRootElmt.contains(e.target))
    //   showComponent = false;
    // }
    showComponent = (inputRef.contains(e.target) || commandRootElmt.contains(e.target));
  }

</script>

<svelte:body onclick={handleOutsideClick}/>

<Command.Root
  bind:ref={commandRootElmt}
  class={className}
>
  {#if showComponent}
    {#if showInput}
      <Command.Input
        placeholder="Type a command or search..."
        onkeydown={handleCommandKeydown}
        bind:value={commandInputValue}
      />
    {:else}
      <CommandPrimitive.Input
    		data-slot="command-input"
        class="hidden"
    		bind:value={commandInputValue}
     	/>
    {/if}
      <!-- onblur={handleCommandOnBlur} -->
    <Command.List>
      <!-- <Command.Empty>No results found.</Command.Empty> -->
      {#each Object.entries(commandItems) as [group, items], idx}
        <Command.Group heading={group.toUpperCase()}>
          {#each items as item}
            {#if "href" in item}
              <a href={item.href}>
                <Command.Item
                  class="cursor-pointer"
                  data-id={item.title}
                  tabindex="0"
                >
                  {item.title}
                </Command.Item>
              </a>
            {:else}
              <Command.Item class="cursor-pointer"
                onclick={onCommandItemClick}
                data-unit={item.type}
                data-id={item.title}
                tabindex="0"
              >
                {stringify(item.title)}
              </Command.Item>
            {/if}
          {/each}
          {#if idx < (Object.entries(commandItems).length - 1)} <Command.Separator /> {/if}
        </Command.Group>
      {/each}
    </Command.List>
  {/if}
</Command.Root>
