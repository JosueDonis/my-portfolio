<script>
	import { Shape } from '@icons';
	import { AvatarPixar, ShapeSvg } from '@images';
	import { Astrounaut, MediaSocial } from '@molecules';
</script>

<section
	id="about"
	class="flex items-center flex-col md:mt-0 mt-14 md:h-full h-auto md:gap-0 gap-10 justify-evenly"
>
	<div
		class="flex items-center gap-10 justify-center animate-fade animate-once animate-ease-in md:flex-row flex-col"
	>
	<div class="bg-cover bg-center w-[400px] avatar aspect-[1/1]" style="background-image:url({AvatarPixar})" />
		<!-- <Astrounaut /> -->
		<div class="flex flex-col gap-4 items-center text-center md:w-[50%] w-full">
			<h2 class="text-6xl font-bold font-poppins animate-fade-up animate-once text-[#606DCE]">
				Josué Donis
			</h2>
			<p class="text-xs animate-fade-up animate-once">
				"En un universo impulsado por la tecnología, cada línea de código es una oportunidad para
				dar vida a la innovación"
			</p>
			<MediaSocial />
		</div>
	</div>
	<div class="flex gap-10 animate-fade-right animate-once animate-ease-in">
		<p class="text-sm">
			Así que, si estás listo para embarcarte en un viaje digital emocionante, explorar nuevas
			posibilidades tecnológicas o simplemente sumergirte en un mundo de desarrollo de software
			apasionado, ¡has llegado al lugar adecuado! Te invito a explorar mi trabajo, conocer mis
			proyectos y unirte a mí en esta aventura de innovación y creatividad.
		</p>
	</div>
</section>

<style>
	.avatar {
		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		animation: liquid 8s ease-in-out infinite;
	}

	@keyframes liquid {
		0% {
			border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
			background-size: 100% 100%;
		}

		50%{
			border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
			background-size: 100% 100%;
		}
		100%{
			border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
			background-size: 100% 100%;
		}
	}
</style>