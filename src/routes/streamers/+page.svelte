<script lang="ts">
  import { Badge } from 'sveltestrap/src';
	import Table from "$lib/components/Table.svelte";
	import type { TableColumn } from "$lib/components/TableColumn";
	import type { PageServerData } from "./$types";
	import type { Streamer } from "./streamer";

  export let data: PageServerData;
  const streamers: Streamer[] = (data || {streamers: []}).streamers;

  const columns: TableColumn[] = [
    {name: 'Username', prop: 'username', sortOrder: 'asc'}, 
    {name: 'Estado', prop: 'status', sortOrder: 'asc'},
    {name: 'Personaje', prop: 'character', sortOrder: 'asc'}, 
    {name: 'Rol', prop: 'role', sortOrder: 'asc'},
    {name: 'Redes', prop: 'social'},
    {name: 'Categoría', prop: 'category', sortOrder: 'asc'},
  ];
  const rows = streamers;

  const onlineStreamers = streamers.filter(s => s.status);
  
  const portada = Math.floor(Math.random() * (onlineStreamers.length));

  const streamerPortada = onlineStreamers.length > 0 ? onlineStreamers[portada] : streamers[Math.floor(Math.random() * (streamers.length))];
</script>

<svelte:head>
	<title>OldSchoolRP - Streamers</title>
	<meta name="description" content="OldSchoolRP Streamers" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
</svelte:head>

<div>
  <div class="twitch-container">
    <iframe
      title="random"
      src="https://player.twitch.tv/?autoplay=false&channel={streamerPortada.username}&parent=old-school-rp.vercel.app"
      height="500"
      width="800"
      allowfullscreen
    ></iframe>
  </div>
  <Table columns={columns} rows={rows}>
    <div slot="rowCell" let:col let:value>
      {#if col.name === 'Username'}
        <a href="https://www.twitch.com/{value}" target="_blank" rel="noopener noreferrer" class="streamer-username">
          <img src="icons/{value}.png" alt="{value}">
          <span>{value}</span>
        </a>
      {:else if col.name === 'Estado'}
        {#if value}
          <Badge style="font-size: 13px;" pill color='danger'>Live <i class="bi bi-camera-video-fill"></i></Badge>
        {:else}
          <Badge style="font-size: 13px;" pill color='secondary'>Offline <i class="bi bi-camera-video-off-fill"></i></Badge>
        {/if}
      {:else}
        <span>{#if value}{value}{/if}</span>
      {/if}
    </div>
  </Table>
</div>

<style>
  .twitch-container {
    display: flex;
    justify-content: center;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }
  .streamer-username img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }

  .streamer-username span {
    padding-left: 10px;
    font-size: 16px;
  }
</style>