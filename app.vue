<template>
	<NuxtPage />
</template>


<script setup lang="ts">

	import { AppSetup } from './utils/app'
	AppSetup()

</script>


<style>

	.page-enter-active,
	.page-leave-active {
		transition: all 0.25s ease;
	}

	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		transition: all 0.25s ease;
	}


	.page-leave-from,
	.page-enter-to {
		opacity: 1;
	}

</style>