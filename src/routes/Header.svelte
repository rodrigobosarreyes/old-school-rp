<script>
  import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Icon } from 'sveltestrap';

  let url = ``;

  onMount(() => url = window.location.href);
</script>

<header></header>
<div class="header">

  <div class="nav-content">
    <div class="nav-item">
      <a href="/streamers" class:active={$page.url.pathname==='/streamers'}>
        Streamers
      </a>
    </div>
    <div class="nav-item" class:active={$page.url.pathname==='/servidor'}>
      <a href="/servidor">
        Servidor
      </a>
    </div>
    <div class="nav-item">
      <a href="https://oldschoolrp.tebex.io/" target="_blank" rel="noopener noreferrer">
        Tienda
        <Icon name="box-arrow-up-right" style="font-size: 18px; vertical-align: middle;"/>
      </a>
    </div>
  </div>
</div>

<style>
  .header {
    display: flex;
    align-items: center;
    background-color: transparent;
  }
  header {
    background-image: url('$lib/images/header.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }

  .nav-content {
    display: flex;
    justify-content: space-evenly;
    flex-basis: 100%;
  }

  .nav-item {
    font-family: 'Tilt Warp', cursive;
    font-size: 42px;
    color: white;
  }

  .nav-item:hover {
    color: #bf8a94;
    cursor: pointer;
  }

  .active {
    color: #ed334f;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
</style>