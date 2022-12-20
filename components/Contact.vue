<template>
    <section id="cta" class="container mx-auto px-4 py-16">
        <div class="flex flex-col">
            <div class="mb-8">
                <h1 class="text-3xl text-center font-bold text-white">Have an interesting project?</h1>
            </div>
            <div class="flex justify-center">
                <NuxtLink to="mailto:hello@saturdays.io">
                    <button class="button is-link ">
                        <p class="text-xl"><strong>Say Hello</strong></p>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>
@import '~/assets/styles/tailwind.scss';

.button.is-link {
    color: $white;
    background: none;
    border-image: linear-gradient(120deg, rgba(248,12,128), rgba(60,120,244)) 1;
    border-width: 4px;
    border-style: solid;
    padding: 1.5rem 2rem;

    &:hover {
        background: none;
        opacity: 0.75;
    }
}
</style>