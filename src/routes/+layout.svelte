<script>
	import '@styles/app.scss';
	import Nav from '@organisms/Nav.svelte';
	import Layout from '@templates/Layout.svelte';
</script>

<Layout>
	<Nav />
	<slot />
</Layout>
