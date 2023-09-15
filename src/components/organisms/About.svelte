<script>
	import Avatar from '@atoms/Avatar.svelte';
	import Astronaut from '@images/astronaut.png';
</script>

<section class="flex items-center flex-col h-[calc(100%_-_56px)] gap-10">
	<div class="flex items-center gap-10 justify-center h-[60%]">
		<!-- <Avatar class="w-[300px] m-0" /> -->
		<img class="w-[150px] aspect-auto object-cover object-center" src={Astronaut} alt="Astronaut" />
		<div class="flex flex-col gap-4 items-center w-[50%] text-center">
			<h2 class="text-6xl font-bold font-inter animate-fade-up animate-once text-[#606DCE]">Josué Donis</h2>
			<p class="text-xs animate-fade-up animate-once ">
				<strong>"</strong>En un universo impulsado por la tecnología, cada línea de código es una
				oportunidad para dar vida a la innovación<strong>"</strong>
			</p>
		</div>
	</div>
	<div class="flex flex-col gap-14 h-[40%] items-center">
        <div class="flex gap-10 animate-fade-right animate-once animate-ease-in">
            <p class="text-sm">
                Soy un apasionado desarrollador de software con una misión: transformar ideas en realidad. Ya
                sea construyendo aplicaciones móviles que simplifican la vida cotidiana o diseñando sitios web
                que cautivan a la audiencia, mi enfoque siempre está en la excelencia.
            </p>
            <p class="text-sm">
                Mi caja de herramientas incluye lenguajes de programación, frameworks y tecnologías de
                vanguardia. Pero lo que realmente impulsa mi trabajo es la pasión por desafiar lo establecido
                y superar los límites. Cada proyecto es una oportunidad para aprender, crecer y, lo más
                importante, innovar.
            </p>
        </div>
        <p class="text-sm animate-fade-right animate-once animate-ease-in">
            Así que, si estás listo para embarcarte en un viaje digital emocionante, explorar nuevas
            posibilidades tecnológicas o simplemente sumergirte en un mundo de desarrollo de software
            apasionado, ¡has llegado al lugar adecuado! Te invito a explorar mi trabajo, conocer mis
            proyectos y unirte a mí en esta aventura de innovación y creatividad.
        </p>
    </div>
</section>
