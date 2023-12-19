<script setup lang="ts">

    const props = defineProps({
		intro: String,
	})

</script>


<template>

    <section id="video-hero" class="w-full max-h-screen mx-auto overflow-hidden">
        <div class="relative w-full mx-auto z-0">
            <div id="hero-text-overlay" class="absolute w-full h-full mx-auto z-30 flex">
                <div class="self-center mx-auto">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-center text-white">
                        {{ intro }}
                    </h1>
                </div>
            </div>

            <video id="hero-video" autoplay muted loop playsinline class=" h-full w-full" controlslist="nodownload noremoteplayback disablepictureinpicture disableremoteplayback">
                <source src="@/assets/video/hero-video.mp4" type="video/mp4">
            </video>

        </div>
    </section>

</template>


<style lang="scss">
</style>