<script setup lang="ts">

    const props = defineProps({
		intro: String,
	})

</script>


<template>

    <section id="video-hero" class="w-full h-auto md:h-200 lg:h-240 mx-auto overflow-hidden z-0">
        <div class="relative w-full h-full mx-auto">
            <div id="hero-text-overlay" class="absolute w-full h-full mx-auto z-30 flex">
                <div class="max-w-7xl mx-auto inline-flex self-center px-2">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-center text-white">
                        {{ intro }}
                    </h1>
                </div>
            </div>

            <video id="hero-video" autoplay muted loop playsinline class="w-full h-screen object-cover" controlslist="nodownload noremoteplayback disablepictureinpicture disableremoteplayback">
                <source src="@/assets/video/hero-video.mp4" type="video/mp4">
            </video>

        </div>
    </section>

</template>


<style lang="scss">
</style>