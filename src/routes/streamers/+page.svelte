<script lang="ts">
	import Table from "$lib/components/Table.svelte";
	import type { TableColumn } from "$lib/components/TableColumn";
	import type { PageServerData } from "./$types";
	import type { Streamer } from "./streamer";

  export let data: PageServerData;
  const streamers: Streamer[] = (data || {streamers: []}).streamers;

  const columns: TableColumn[] = [
    {name: 'Username', prop: 'username'}, 
    {name: 'Personaje', prop: 'character'}, 
    {name: 'Rol', prop: 'role'},
    {name: 'Redes', prop: 'social'},
    {name: 'Estado', prop: 'status'},
    {name: 'Categoría', prop: 'category'},
  ];
  const rows = streamers;

  const onlineStreamers = streamers.filter(s => s.status);
  
  const portada = Math.floor(Math.random() * (onlineStreamers.length));
</script>

<svelte:head>
	<title>OldSchoolRP - Streamers</title>
	<meta name="description" content="OldSchoolRP demo app" />
</svelte:head>

<div>
  <div class="twitch-container">
    <iframe
      title="random"
      src="https://player.twitch.tv/?autoplay=false&channel={onlineStreamers[portada].username}&parent=old-school-rp.vercel.app"
      height="500"
      width="800"
      allowfullscreen>
    </iframe>
  </div>
  <Table columns={columns} rows={rows}></Table>
</div>

<style>
  .twitch-container {
    display: flex;
    justify-content: center;
  }
</style>