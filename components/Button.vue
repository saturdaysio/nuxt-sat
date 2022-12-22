<template>
    <NuxtLink>
        <button class="button is-link">
            <p class="text-xl"><strong>{{ cta }}</strong></p>
        </button>
    </NuxtLink>
</template>


<script lang="ts" setup>
    const props = defineProps({
        cta: String,
    })
</script>


<style lang="scss" scoped>
@import '~/assets/styles/tailwind.scss';

.button.is-link {
    color: $white;
    background: none;
    border-image: linear-gradient(120deg, rgba(248, 12, 128), rgba(60, 120, 244)) 1;
    border-width: 4px;
    border-style: solid;
    padding: 1.5rem 2rem;

    &:hover {
        background: none;
        opacity: 0.75;
    }
}
</style>