<template>
    <NuxtLink>
        <button>
            <p class="text-xl leading-8"><strong>{{ cta }}</strong></p>
        </button>
    </NuxtLink>
</template>


<script lang="ts" setup>
    const props = defineProps({
        cta: String
    })
</script>


<style lang="scss" scoped>
</style>