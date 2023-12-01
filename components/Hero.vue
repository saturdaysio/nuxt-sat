<script setup lang="ts">

	// Array of card images
	const cards = [
		{
			id: '0',
			src: "/card/cnn-02.png",
	  		alt: "Canadian",
	  		width: "750px",
	  		height: "1334px"
		},
		{
			id: '1',
			src: "/card/cnn-featured.png",
	  		alt: "USA Today",
	  		width: "750px",
	  		height: "1334px"
		},
		{
			id: '2',
			src: "/card/conor.png",
	  		alt: "Reuters",
	  		width: "416",
	  		height: "566"
		},
		{
			id: '3',
			src: "/card/aperture-mode.webp",
	  		alt: "Canadian",
	  		width: "750px",
	  		height: "912px"
		},
		{
			id: '4',
			src: "/card/max-siedentopf-selection-02.webp",
	  		alt: "USA Today",
	  		width: "750px",
	  		height: "913px"
		},
		{
			id: '5',
			src: "/card/spc.png",
	  		alt: "Reuters",
	  		width: "414px",
	  		height: "896px"
		},
		{
			id: '6',
			src: "/card/IMG_4604.png",
	  		alt: "Reuters",
	  		width: "414",
	  		height: "896"
		},
		{
			id: '7',
			src: "/card/IMG_4608.png",
	  		alt: "Reuters",
	  		width: "414",
	  		height: "896"
		},
	]

	const initial = ref({
		x: 2000,
		opacity: 1,
	})

</script>


<template>
	<section class="w-full mx-auto overflow-hidden">
		<div class="mx-auto flex flex-row gap-x-12"
			v-motion
				:initial="initial"
				:enter="{
					x: -2000,
					opacity: 1,
					transition: {
						duration: 24000,
						ease: 'linear',
						repeat: Infinity,
						repeatType: 'loop',
					}
				}">

			<div v-for="item in cards" :key="item.id" class="shrink-0">
				<img :src="item.src" :alt="item.alt" :width="item.width" :height="item.height" class="object-none" />
			</div>
		</div>
	</section>
</template>


<style lang="scss">
</style>