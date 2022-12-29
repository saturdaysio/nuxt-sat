<template>
    <NuxtLink>
        <button class="button cta">
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

.button.cta {
    color: $white;
    background: none;
    border-image: linear-gradient(120deg, rgba(248, 12, 128), rgba(60, 120, 244)) 1;
    border-width: 4px;
    border-style: solid;
    padding: 0.8rem 2rem;
    height: 4rem;

    &:hover {
        background: none;
        opacity: 0.75;
    }
}
</style>