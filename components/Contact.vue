<template>
    <section id="cta" class="container my-6 py-6 px-4">
        <div class="">
            <div class="pb-6">
                <h1 class="is-size-2 is-size-3-mobile has-text-centered has-text-weight-bold has-text-white">Have an interesting project?</h1>
            </div>
            <div class="level is-centered">
                <div class="level-item">
                    <NuxtLink to="mailto:info@saturdays.io">
                        <button class="button is-link">
                            <p class="is-size-4"><strong>Let's talk</strong></p>
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
@import '~/assets/styles/_variables.scss';

.button.is-link {
    color: $white;
    background: none;
    border-image: linear-gradient(120deg, rgba(248,12,128), rgba(60,120,244)) 1;
    border-width: 4px;
    border-style: solid;
    padding: 2rem;

    &:hover {
        color: $red;
        background: none;
    }
}
</style>