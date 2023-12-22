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


<template>
  <div>
    <NuxtLink v-if="to" :to="to" :target="target || ''" :rel="rel || (noRel ? '' : 'noopener noreferrer')">
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


<style lang="scss" scoped>
  .primary {
    @apply h-12 w-full sm:w-auto py-3 px-6 rounded-md bg-green-400 hover:bg-green-400 text-base leading-6 font-bold text-black text-center transition duration-300 ease-in-out
  }

  .secondary {
    @apply h-12 w-full sm:w-auto py-3 px-6 rounded-md bg-blue-400 hover:bg-blue-800 text-base leading-6 font-bold text-white text-center transition duration-300 ease-in-out
  }

  .cta {
    @apply h-12 w-full sm:w-auto py-3 px-6 rounded-md bg-none border border-white text-base leading-6 font-bold text-white text-center hover:border-green-400 hover:text-green-400 transition duration-300 ease-in-out
  }

  .danger {
    @apply h-12 w-full sm:w-auto py-3 px-6 rounded-md bg-red-600 text-base leading-6 font-bold text-white hover:bg-red-900 transition duration-300 ease-in-out
  }

  .auth {
    @apply h-auto w-full py-4 px-6 rounded-md bg-green-400 hover:bg-green-400 text-base sm:text-xl leading-6 font-bold text-black text-center hover:opacity-80 transition duration-300 ease-in-out
  }
</style>
