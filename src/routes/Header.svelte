<script>
  import logo from '$lib/images/logo.jpg';
  import { page } from '$app/stores';
	import { onMount } from 'svelte';

  let url = ``;

  onMount(() => url = window.location.href);
</script>

<header>
  <a href="/">
    <img src={logo} alt="OldSchoolRP" class="logo">  
  </a>

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
      </a>
    </div>
  </div>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    background-color: #1e1e21;
  }

  .nav-content {
    display: flex;
    justify-content: space-evenly;
    flex-basis: 100%;
  }

  .logo {
    padding: 10px;
    border-radius: 50%;
    width: 100px;
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