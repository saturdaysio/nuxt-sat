<script setup lang="ts">

	const logos = [
		{
			id: '0',
			src: "/logo/cbc.svg",
      		alt: "Canadian Broadcasting Corporation logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '1',
			src: "/logo/usatoday.svg",
      		alt: "USA Today logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '2',
			src: "/logo/reuters.svg",
      		alt: "Reuters logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '3',
			src: "/logo/bloomberg.svg",
      		alt: "Bloomberg logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '4',
			src: "/logo/starz.svg",
      		alt: "Starz Play logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '5',
			src: "/logo/pbs.svg",
      		alt: "PBS logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '6',
			src: "/logo/spc.svg",
      		alt: "Student Price Card logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '7',
			src: "/logo/redbull.svg",
      		alt: "Redbull logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '8',
			src: "/logo/latam.svg",
      		alt: "LATAM logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '9',
			src: "/logo/avianca.svg",
      		alt: "Avianca logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '10',
			src: "/logo/ogilvy.svg",
      		alt: "Ogilvy logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '11',
			src: "/logo/plastic.svg",
      		alt: "Plastic Mobile logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '12',
			src: "/logo/samsung.svg",
      		alt: "Samsung logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '13',
			src: "/logo/dell.svg",
      		alt: "DELL EMC logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '14',
			src: "/logo/cisco.svg",
      		alt: "Cisco Networks logo",
      		width: "256px",
      		height: "256px"
		},
		{
			id: '15',
			src: "/logo/microsoft.svg",
      		alt: "Microsoft logo",
      		width: "256px",
      		height: "256px"
		},
	]

</script>


<template>
	<section class="px-4 py-16 md:py-20 lg:py-24">
	  <div class="max-w-6xl mx-auto">
		<div class="px-4 pb-8">
			<h1 class="text-3xl md:text-4xl lg:text-5xl text-center font-bold lime-to-aqua">We partner with brands that care about crafting meaningful digital experiences</h1>
		</div>

		<div id="grid" class=" grid grid-cols-2 gap-4 overflow-hidden sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
		  <div class="logo" v-for="item in logos" :key="item.id">
			<figure>
				<img class="w-36 h-36" :src="item.src" :alt="item.alt" loading="lazy" :width="item.width" :height="item.height">
			</figure>
		  </div>

		</div>
	  </div>
	</section>
</template>


<style lang="scss" scoped>
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		padding: 0 2rem;
	}


	@media only screen and (max-width: 640px) {
		.logo {
			padding: 0 1rem;
		}
	}

</style>