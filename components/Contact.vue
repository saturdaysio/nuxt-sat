<template>
    <section id="cta" class="w-full mx-auto px-4 py-16 bg-black-800">
        <div class="container mx-auto flex flex-col my-16">
            <div class="mb-8">
                <h1 class="text-3xl lg:text-5xl text-center font-bold text-white">Have an interesting project?</h1>
            </div>
            <div class="flex justify-center">
                <Button :cta="'Say Hello'" :to="'mailto:hello@saturdays.io'" rel="noreferrer" target="_blank" />
            </div>
        </div>
    </section>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>
</style>