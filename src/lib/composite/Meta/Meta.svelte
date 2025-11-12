<script>
  import { asset, resolve } from "$app/paths";
  let { metadata:m = {} } = $props()
</script>

<svelte:head>
  <!-- essentials -->
  {#if m.title}
    <title>{m.title}</title>
    <meta name="title" content={m.title}/>
   	<meta property="og:title" content={m.title} />
  {/if}
  {#if m.type}
  	<meta property="og:type" content={m.type} />
  {/if}
  {#if m.url}
  	<meta property="og:url" content={resolve(m.url)}/>
  {/if}

  <!-- optional metadata -->
  {#if m.audio}
    <meta property="og:audio" content={asset(m.audio)} />
  {/if}
  {#if m.description}
    <meta property="description" content={m.description} />
  	<meta property="og:description" content={m.description} />
  {/if}
  {#if m.determiner}
    <meta property="og:determiner" content={m.determiner}/>
  {/if}
  {#if m.locale}
    <meta property="og:locale" content={m.locale}/>
  {/if}
  {#if m.site_name}
    <meta property="og:site_name" content={m.site_name}/>
  {/if}

  {#if m.video}
    {#if m.video.url}
      <meta property="og:video" content={asset(m.video.url)}/>
    {/if}
    {#if m.video.secure_url}
      <meta property="og:video:secure_url" content={asset(m.video.secure_url)}/>
    {/if}
    {#if m.video.width}
      <meta property="og:video:width" content={m.video.width}/>
    {/if}
    {#if m.video.height}
      <meta property="og:video:height" content={m.video.height}/>
    {/if}
    {#if m.video.type}
      <meta property="og:video:type" content={m.video.type}/>
    {/if}
  {/if}
  {#if m.image}
    {#if m.image.url}
      <meta property="og:image" content={asset(m.image.url)}/>
    {/if}
    {#if m.image.secure_url}
      <meta property="og:image:secure_url" content={asset(m.image.secure_url)}/>
    {/if}
    {#if m.image.width}
      <meta property="og:image:width" content={m.image.width}/>
    {/if}
    {#if m.image.height}
      <meta property="og:image:height" content={m.image.height}/>
    {/if}
    {#if m.image.type}
      <meta property="og:image:type" content={m.image.type}/>
    {/if}
    {#if m.image.alt}
      <meta property="og:image:alt" content={m.image.alt}/>
    {/if}
  {/if}

  {#if m.article}
    {#if m.article.published_time}
      <meta property="article:published_time" content={m.article.published_time}/>
    {/if}
    {#if m.article.modified_time}
      <meta property="article:modified_time" content={m.article.modified_time}/>
    {/if}
    {#if m.article.section}
      <meta property="article:section" content={m.article.section}/>
    {/if}
    {#each m.article.authors as author}
      <meta property="article:author" content={author}/>
    {/each}
    {#each m.article.tags as tag}
      <meta property="article:tag" content={tag}/>
    {/each}
  {/if}
</svelte:head>
