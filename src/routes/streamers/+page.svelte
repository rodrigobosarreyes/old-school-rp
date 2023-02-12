<script lang="ts">
	import type { PageServerData } from "./$types";

  export let data: PageServerData;
  const { streamers } = data;
  const portada = Math.floor(Math.random() * (streamers.length));
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
  {streamers[portada].username}

</div>

<style>
  .twitch-container {
    display: flex;
    justify-content: center;
  }
</style>