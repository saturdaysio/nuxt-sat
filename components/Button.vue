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
</style>