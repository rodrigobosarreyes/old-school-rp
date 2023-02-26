<script lang="ts">
	import Table from "$lib/components/Table.svelte";
	import type { TableColumn } from "$lib/components/TableColumn";
	import type { PageServerData } from "./$types";
	import type { Streamer } from "./streamer";

  export let data: PageServerData;
  const streamers: Streamer[] = (data || {streamers: []}).streamers;

  const columns: TableColumn[] = [
    {name: 'Username', prop: 'username', sortOrder: 'asc'}, 
    {name: 'Personaje', prop: 'character', sortOrder: 'asc'}, 
    {name: 'Rol', prop: 'role', sortOrder: 'asc'},
    {name: 'Redes', prop: 'social'},
    {name: 'Estado', prop: 'status', sortOrder: 'asc'},
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
  <Table columns={columns} rows={rows}></Table>
</div>

<style>
  .twitch-container {
    display: flex;
    justify-content: center;
  }
</style>