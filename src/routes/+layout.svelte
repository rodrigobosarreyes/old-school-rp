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
</style>