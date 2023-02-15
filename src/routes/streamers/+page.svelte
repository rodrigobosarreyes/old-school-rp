<script lang="ts">
	import Table from "$lib/components/Table.svelte";
	import type { PageServerData } from "./$types";
	import type { Streamer } from "./streamers";

  export let data: PageServerData;
  const streamers: Streamer[] = (data || {streamers: []}).streamers;
  const portada = Math.floor(Math.random() * (streamers.length));
  const columns = [
    {name: 'Username', prop: 'username'}, 
    {name: 'Personaje', prop: 'personaje'}, 
    {name: 'Rol', prop: 'rol'}
  ];
  const rows = streamers;
</script>

<svelte:head>
	<title>OldSchoolRP - Streamers</title>
	<meta name="description" content="OldSchoolRP demo app" />
</svelte:head>

<div>
  <div class="twitch-container">
    <iframe
      title="random"
      src="https://player.twitch.tv/?autoplay=false&channel={streamers[portada].username}&parent=old-school-rp.vercel.app"
      height="500"
      width="800"
      allowfullscreen>
    </iframe>
  </div>

  <!-- {#each streamers as streamer}
    {streamer.username}
  {/each} -->
  <Table columns={columns} rows={rows}></Table>

</div>

<style>
  .twitch-container {
    display: flex;
    justify-content: center;
  }
</style>