<script lang="ts">
	import { Card } from '@atoms';
	import Gridia from '@images/gridia-mockup.png';
	import ClaroClub from '@images/claro-mockup.png';
	import Learning from '@images/learning-mockup.png';
	import Localizame from '@images/localizame-mockup.png';
	import Symfonia from '@images/symfonia-mockup.png';
	import Marketspace from '@images/marketspace-mockup.png';
	import type { SvelteComponent } from 'svelte';
	import {
		React,
		Tailwindcss,
		Svelte,
		Typescript,
		Javascript,
		Vite,
		Ionic,
		Nodejs,
		Prisma,
		Vercel,
		Capacitor,
		Android,
		Apple
	} from '@icons';

	let projects = [
		{
			src: Gridia,
			title: 'Gridia',
			description:
				'Gestiona el consumo de agua de uno o varios proyectos de vivienda y recibe alertas de posibles problemas o fugas de agua de manera inmediata en la aplicación web / móvil Gridia para solucionarlo rápidamente.',
			icons: [Svelte, Javascript, Vite, Ionic, React, Vercel, Tailwindcss,]
		},
		{
			src: ClaroClub,
			title: 'Claro Club',
			description:
				' App de beneficios que premia tu fidelidad  y preferencia. Obteniendo gratis, de forma fácil y rápida, una amplia gama de promociones y descuentos exclusivos en establecimientos seleccionados',
			icons: [React, Javascript, Ionic, Capacitor, Android, Apple]
		},
		{
			src: Localizame,
			title: 'Localizame',
			description:
				'Es una herramienta que permite localizar líneas móviles Claro en tiempo real por medio de GPS, dirección IP y localización por antenas (SIM).',
			icons: [React, Typescript, Ionic, Capacitor, Android, Apple]
		},
		{
			src: Learning,
			title: 'Plantilla Learning',
			description:
				'Esta plantilla te permite ofrecer contenido interactivo, seguimiento de progreso, y una experiencia de usuario intuitiva. Plataforma de cursos en línea',
			icons: [React, Typescript, Ionic, Vite, Vercel, Capacitor, Tailwindcss,]
		},
		{
			src: Symfonia,
			title: 'Symfonia',
			description:
				'Symfonia te permite emitir facturas electrónicas con certificadores autorizados por la SAT en Guatemala, simplica la gestión y el control financiero de tu negocio.',
			icons: [React, Javascript, Ionic, Vercel, Tailwindcss,]
		},
		{
			src: Marketspace,
			title: 'Marketspace',
			description:
				'Dale a tus clientes una manera rápida y segura de hacer sus pedidos en línea con MarketSpace.',
			icons: [Svelte, Javascript, Nodejs, Prisma, Vercel]
		}
	];
</script>

<ul class="projects">
	{#each projects as project}
		<Card {...project} />
	{/each}
</ul>

<style>
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 40px;
	}
</style>
