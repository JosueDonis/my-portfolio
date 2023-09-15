<script>
	import { blur, fade } from 'svelte/transition';
</script>
<main transition:blur={{ amount: 10 }}>
	<slot />
</main>
