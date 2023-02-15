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
  }

  .nav-content {
    display: flex;
    justify-content: space-evenly;
    flex-basis: 100%;
  }

  .logo {
    border-radius: 50%;
    width: 150px;

  }

  .nav-item {
    font-family: 'Bungee Shade', cursive;
    font-size: 42px;
  }

  .nav-item:hover {
    /* color: white; */
    /* background-color: red; */
    color: red;
    cursor: pointer;
  }

  .active {
    color: red;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
</style>