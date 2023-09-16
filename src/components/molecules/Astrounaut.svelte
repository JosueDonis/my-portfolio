<script>
	import Astronaut from '@images/astronaut.png';
	import { onMount } from 'svelte';
	import Atropos from 'atropos';

	onMount(() => {
		// Initialize
		const myAtropos = Atropos({
			el: '.my-atropos',
			shadow: false,
			activeOffset: 40,
			shadowOffset: 50,
			shadowScale: 1.05,
			duration: 300,
			rotate: true,
			rotateTouch: true,
			rotateXMax: 15,
			rotateYMax: 15,
			stretchX: 0,
			stretchY: 0,
			stretchZ: 0,
			highlight: true
		});
	});
</script>

<!-- main Atropos container (required), add your custom class here -->
<div
	class="atropos my-atropos flex items-center justify-center animate-fade animate-once animate-ease-in"
>
	<!-- scale container (required) -->
	<div class="atropos-scale">
		<!-- rotate container (required) -->
		<div class="atropos-rotate">
			<!-- inner container (required) -->
			<div class="atropos-inner">
				<img
					data-atropos-offset="5"
					class="w-[150px] m-5 md:aspect-auto md:h-full h-[300px] object-contain object-center float-ease-in-out"
					src={Astronaut}
					alt="Astronaut"
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.float-ease-in-out {
		animation: float 4s infinite ease-in-out;
	}
	@keyframes float {
		0% {
			transform: translateY(0);
			-webkit-transform: translateY(0);
		}

		50% {
			transform: translateY(1rem);
			-webkit-transform: translateY(1rem);
		}

		100% {
			transform: translateY(0);
			-webkit-transform: translateY(0);
		}
	}
</style>
