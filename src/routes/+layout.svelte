<script>
	import '@styles/app.scss';
	import Nav from '@organisms/Nav.svelte';
	import Layout from '@templates/Layout.svelte';
	import { PageTransition } from '@atoms';
	export let data;

	let title = 'Josue Donis 🚀 | Frontend, Javascript, React, CSS, Perfomance';
</script>

<svelte:window
	on:visibilitychange={(e) => {
		title = !!document.hidden
			? 'Regresa pronto! 👋'
			: 'Josue Donis 🚀 | Frontend, Javascript, React, CSS, Perfomance';
	}}
/>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<main>
	<Nav />
	<slot />
</main>
