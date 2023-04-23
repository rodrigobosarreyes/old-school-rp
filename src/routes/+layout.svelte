<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer /> 
</div>

<style>
	main {
		min-height: calc(100vh - calc(400px + 63px + 58px + 24px));
	}

	:global(.btn-outline-secondary) {
    border-color: #ed334f !important;
    color: #ed334f;
		font-weight: bold;
  }

  :global(.btn-outline-secondary.active),
  :global(.btn-outline-secondary:active),
  :global(.btn-outline-secondary:hover) {
    background-color: #ed334f !important;
    color: white;
  }

	:global(.btn-outline-secondary.active) {
		font-weight: bold;
	}
</style>