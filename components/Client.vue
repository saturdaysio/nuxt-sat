<template>
	<section class="px-4 py-24 sm:py-32">
	  <div class="max-w-6xl mx-auto">
		<div class="px-4 pb-8">
			<h1 class="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-grad-01">We partner with brands that care about meaningful digital experiences</h1>
		</div>

		<div id="grid" class=" grid grid-cols-2 gap-4 overflow-hidden sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
		  <div class="logo" v-for="item in clientStore.clientJson.clients" :key="item.id">
			<figure>
				<img class="w-36 h-36" :src="item.imgSrc" :alt="item.imgAlt" loading="lazy" :width="item.width" :height="item.height">
			</figure>
		  </div>

		</div>
	  </div>
	</section>
  </template>


<script lang="ts">

	import { useClientStore } from "~~/store/client";

	export default {
		setup() {
			const clientStore = useClientStore()
			return { clientStore }
		}
	}

</script>

<style lang="scss" scoped>
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		padding: 0 2rem;
	}


	@media only screen and (max-width: 800px) {

	}

	@media only screen and (max-width: 640px) {
		.logo {
			padding: 0 1rem;
		}
	}
</style>