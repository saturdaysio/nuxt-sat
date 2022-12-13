<template>
    <section id="cta" class="container my-16 mx-auto py-6 px-4">
        <div class="flex flex-col">
            <div class="pb-8">
                <h1 class="text-3xl text-center font-bold text-white">Have an interesting project?</h1>
            </div>
            <div class="">
                <div class="">
                    <NuxtLink to="mailto:info@saturdays.io">
                        <button class="button is-link">
                            <p class="text-xl text-white"><strong>Let's talk</strong></p>
                        </button>
                    </NuxtLink>
                </div>
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
    border-width: 4px;
    border-style: solid;
    padding: 2rem;

    &:hover {
        color: $red;
        background: none;
    }
}
</style>