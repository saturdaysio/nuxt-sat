<template>
  <div>
    <NuxtLink v-if="to" :to="to" :target="target || ''"
              :rel="rel || (noRel ? '' : 'noopener noreferrer')">
      <button :class="classObject">
        {{ !hasSlots ? buttonLabel : '' }}
        <slot/>
      </button>
    </NuxtLink>

    <button :type="buttonType" v-else @click="onClick" :class="classObject">
      {{ !hasSlots ? buttonLabel : '' }}
      <slot/>
    </button>
  </div>
</template>


<script setup lang="ts">

  interface ButtonProps {
    buttonLabel: string
    to?: string
    onClick?: () => void
    buttonType?: 'button' | 'submit' | 'reset'
    error?: Error | null | undefined | string | boolean
    success?: boolean
    buttonClass?: string
    errorClasses?: string
    successClasses?: string
    target?: string
    rel?: string
    noRel?: boolean
  }

  const props = defineProps<ButtonProps>()

  const { buttonLabel, to, onClick, buttonType, error, success, buttonClass, errorClasses, successClasses, target, rel, noRel } = toRefs(props)

  const slots = useSlots()

  const hasSlots = computed(() => Object.keys(slots).length > 0)

  const classObject = computed(() => ({
    [buttonClass?.value as string]: true,
    [errorClasses?.value as string]: error?.value,
    [successClasses?.value as string]: success?.value,
  }))

</script>


<style lang="scss" scoped>
</style>
