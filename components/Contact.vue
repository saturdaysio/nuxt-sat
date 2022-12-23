<template>
    <section id="cta" class="container mx-auto px-4 py-16">
        <div class="flex flex-col">
            <div class="mb-8">
                <h1 class="text-3xl lg:text-5xl text-center font-bold text-white">Have an interesting project?</h1>
            </div>
            <div class="flex justify-center">
                <Button :cta="'Say Hello'" :to="'mailto:hello@saturdays.io'" />
            </div>
        </div>
    </section>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>
</style>