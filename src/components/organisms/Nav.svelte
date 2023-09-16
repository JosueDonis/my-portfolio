<script>
	import { Link } from '@atoms';
	import { fade } from 'svelte/transition';
	let navs = [
		{
			name: 'Acerca de',
			href: '#about'
		},
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

<nav class="flex px-2 w-full max-w-full md:h-14 h-auto flex-none transition-colors duration-500">
	<ul class="flex font-bold justify-end items-center w-full max-w-full flex-wrap gap-8">
		{#each navs as nav}
			<li>
				<Link name={nav.name} href={nav.href} />
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
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
