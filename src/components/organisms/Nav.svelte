<script>
	import { Link } from '@atoms';
	import { fade } from 'svelte/transition';
	let navs = [
		// {
		// 	name: 'Acerca de',
		// 	href: '#about',
		// 	class: 'md:flex hidden',
		// },
		{
			name: 'Experencia',
			href: '#experencie'
		},
		{
			name: 'Proyectos',
			href: '#projects'
		},
		{
			name: 'Tecnologías',
			href: '#tech'
		}
	];
</script>

<nav class="flex px-2 w-full max-w-full h-14 flex-none transition-colors duration-500 items-center justify-center">
	<ul
		class="flex font-bold justify-end items-center w-full max-w-full flex-wrap md:gap-8 gap-4 text-sm"
	>
		{#each navs as nav}
			<li>
				<Link name={nav.name} href={nav.href} />
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	// nav {
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	right: 0;
	// 	height: 52px;
	// 	background: hsl(0 4% 95% / 0.75);
	// 	backdrop-filter: blur(4px);
	// 	z-index: 2;
	// }
	ul {
		position: relative;
		li {
			display: flex;
			align-items: center;
			position: relative;
			transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
		}
		li:after {
			content: '';
			position: absolute;
			width: 0%;
			height: 0.08rem;
			display: block;
			transition: all 0.3s ease;
			bottom: 0%;
		}
		li:hover::after {
			width: 100%;
			height: 0.08rem;
			background-color: #000;
		}
	}
</style>
