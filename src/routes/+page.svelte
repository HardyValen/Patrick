<script>
  import Button from "$sb/Example/Button/Button.svelte";
  import DarkMode from "$sb/Composite/DarkMode/DarkMode.svelte";
</script>

<h1>Home</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<Button primary label="Touch Me!"/>
<DarkMode />

<p class={["text-gray-600 dark:text-red-300"].join(' ')}>Test Color</p>
