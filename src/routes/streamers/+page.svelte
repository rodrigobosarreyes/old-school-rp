<script lang="ts">
  import { Badge, Icon, Tooltip, Button, ButtonGroup } from 'sveltestrap/src';
	import Table from "$lib/components/Table.svelte";
	import type { TableColumn } from "$lib/components/TableColumn";
	import type { PageServerData } from "./$types";
	import type { Streamer } from "./streamer";
	import OsButtonGroup from '$lib/components/OsButtonGroup.svelte';

  export let data: PageServerData;
  const streamers: Streamer[] = (data || {streamers: []}).streamers;

  const columns: TableColumn[] = [
    {name: 'Username', prop: 'username', sortOrder: 'asc'}, 
    {name: 'Estado', prop: 'status', sortOrder: 'asc', minWidth: '150px', maxWidth: '150px', width: '150px'},
    {name: 'Personaje', prop: 'character', sortOrder: 'asc'}, 
    {name: 'Rol', prop: 'role', sortOrder: 'asc', minWidth: '150px', maxWidth: '150px', width: '150px'},
    {name: 'Redes', prop: 'social'},
    {name: 'Categoría', prop: 'category', sortOrder: 'asc'},
  ];
  const onlineStreamers = streamers.filter(s => s.status);
  
  const portada = Math.floor(Math.random() * (onlineStreamers.length));

  const streamerPortada = onlineStreamers.length > 0 ? onlineStreamers[portada] : streamers[Math.floor(Math.random() * (streamers.length))];
  let rows = [...streamers];

  const onClickRoleFilter = (rol: string) => {
    rows = streamers.filter(s => s.role === rol);
  }

  const onClickLiveFilter = (evt: any) => {
    console.log(evt);
    rows = streamers.filter(s => s.status);
  }

  const onClickFilterAll = (evt: any) => {
    console.log(evt);
    rows = [...streamers];
  }
</script>

<svelte:head>
	<title>OldSchoolRP - Streamers</title>
	<meta name="description" content="OldSchoolRP Streamers" />
</svelte:head>

<div>
  <div class="twitch-container">
    {#if streamerPortada}
      <iframe
        title="random"
        src="https://player.twitch.tv/?autoplay=false&channel={streamerPortada.username}&parent=old-school-rp.vercel.app"
        height="500"
        width="800"
        allowfullscreen
      ></iframe>
      <div class="ttv-detail">
        <div class="ttv-container">
          <div class="ttv-username">
            <a href="https://www.twitch.com/{streamerPortada.username}" target="_blank" rel="noopener noreferrer" class="streamer-username">
              {streamerPortada.username}
            </a>
            <img src="icons/{streamerPortada.username}.png" alt="{streamerPortada.username}">
          </div>
          <div class="ttv-character">
            {streamerPortada.character} <span id="ttv-detail__role" class="cursor-default">({streamerPortada.role})</span>
            {#if streamerPortada.banda}
              <Tooltip target="ttv-detail__role" placement="bottom">{streamerPortada.banda}</Tooltip>
            {/if}
          </div>
        </div>
      </div>
    {/if}
  </div>
  <div style="margin: 10px 10%;">
    <OsButtonGroup 
      activeBtn="all"
      buttons={[
        {id: 'live', label: 'En vivo', onClick: onClickLiveFilter},
        {id: 'banda', label: 'Banda', onClick: () => onClickRoleFilter('Banda')},
        {id: 'civil', label: 'Civil', onClick: () => onClickRoleFilter('Civil')},
        {id: 'police', label: 'Policía', onClick: () => onClickRoleFilter('Policía')},
        {id: 'all', label: 'Todos', onClick: onClickFilterAll, active: true},
      ]}></OsButtonGroup>
  </div>
  <div class="table-container">
    <Table columns={columns} rows={rows}>
      <div slot="rowCell" let:col let:value>
        {#if col.name === 'Username'}
          <a href="https://www.twitch.com/{value}" target="_blank" rel="noopener noreferrer" class="streamer-username">
            <img src="icons/{value}.png" alt="{value}">
            <span>{value}</span>
          </a>
        {:else if col.name === 'Estado'}
          {#if value}
            <Badge style="font-size: 13px;" pill color='danger'>Live <Icon name="camera-video-fill" /></Badge>
          {:else}
            <Badge style="font-size: 13px;" pill color='secondary'>Offline <Icon name="camera-video-off-fill"/></Badge>
          {/if}
        {:else if col.name === 'Redes'}
          {#if value?.instagram}
            <a class="icon" href ={value.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram" /></a>
          {/if}
          {#if value?.twitter}
            <a class="icon" href ={value.twitter} target="_blank" rel="noopener noreferrer"><Icon name="twitter"/></a>
          {/if}
          {#if value?.youtube}
            <a class="icon" href ={value.youtube} target="_blank" rel="noopener noreferrer"><Icon name="youtube"/></a>
          {/if}
          {#if value?.tiktok}
            <a class="icon" href ={value.tiktok} target="_blank" rel="noopener noreferrer"><Icon name="tiktok"/></a>
          {/if}
        {:else}
          <span>{#if value}{value}{/if}</span>
        {/if}
      </div>
    </Table>
  </div>
</div>

<style>
  .ttv-detail {
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: white;
  }
  .ttv-container {
    background-color: black;
    padding: 25px 40px;
    border-radius: 0 15px 15px 0;
  }
  .ttv-detail .ttv-username {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .twitch-container {
    display: flex;
    justify-content: center;
    margin: 2em 0;
  }
  .table-container {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: auto;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }
  .streamer-username img,
  .ttv-username img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .streamer-username span {
    padding-left: 10px;
  }

  .icon {
    font-size: 18px;
    padding-right: 5px;
  }

</style>