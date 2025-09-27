<script>
  import { cn, typographyVariants, viewport } from "$lib";

  let {
    ref = $bindable(null),
    class: className,
    noExit = false,
    variant = "fade",
    duration = 1000,
    delay = 0,
    translate = {
      x: 100,
      y: 100
    },
    children,
    ...restProps
  } = $props();

  let inView = $state(false);
  let rootNode = $state();

  function handleEnterViewport() { inView = true; };
  function handleExitViewport() {
    if (!noExit) {
      inView = false;
    }
  };

  $effect(() => {
    const eventNames = [
      [ "enterViewport", handleEnterViewport ],
      [ "exitViewport", handleExitViewport ]
    ]
    eventNames.forEach(v => {
      rootNode.addEventListener(v[0], v[1]);
    })

    return(() => {
      eventNames.forEach(v => {
        rootNode.removeEventListener(v[0], v[1]);
      })
    })
  })

</script>

<div
  use:viewport
  bind:this={ref}
  bind:this={rootNode}
  {...restProps}
>
  <div
    class={cn(
      inView ? `enter-animation enter-${variant}` : `exit-animation exit-${variant}`,
      className
    )}
    style="
      --duration: {duration}ms;
      --delay: {delay}ms;
      --translate-x: {translate.x}px;
      --translate-y: {translate.y}px;
    "
  >
    {@render children?.()}
  </div>
</div>

<style>
  .enter-animation {
		opacity: 1;
		transition-duration: var(--duration);
		transition-delay: var(--delay);
		transform: scale(1) translateX(0) translateY(0);
	}
	.exit-animation {
		opacity: 0;
		transition-duration: var(--duration);
		transition-delay: var(--delay);
		pointer-events: none;
	}
	.exit-top {
		transform: translateY(calc(-1 * abs(var(--translate-y))));
	}
	.exit-bottom {
		transform: translateY(var(--translate-y));
	}
	.exit-left {
		transform: translateX(calc(-1 * abs(var(--translate-x))));
	}
	.exit-right {
		transform: translateX(var(--translate-x));
	}
	.exit-diagonal {
		transform: translateX(var(--translate-x)) translateY(var(--translate-y));
	}
	.exit-scale {
		transform: scale(0)
	}
</style>
