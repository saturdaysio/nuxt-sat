<template>
	<NuxtPage />
</template>


<script setup lang="ts">
</script>


<style>

	.page-enter-active,
	.page-leave-active {
		transition: all 0.3s;
	}

	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		transition: all 0.3s;
	}

	.fade-leave-to,
	.fade-enter-from {
		opacity: 0;
	}

	.fade-leave-from,
	.fade-enter-to {
		opacity: 1;
	}

	.fade-leave-active,
	.fade-enter-active {
		transition: opacity 0.3s;
	}


</style>