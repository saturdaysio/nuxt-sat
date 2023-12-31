export default function useFixPageTransition() {
  // TODO: Remove when https://github.com/nuxt/nuxt/issues/13350 fixed
  const key = ref(0)
  const messages = [
    'Uncaught NotFoundError: Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.', // chromium based
    'NotFoundError: The object can not be found here.', // safari
    'NotFoundError: Node.insertBefore: Child to insert before is not a child of this node', // firefox
  ]
  if (typeof window !== 'undefined') {
    // @ts-expect-error using arbitrary window key
    if (!window.__vue5513) {
      window.addEventListener('error', (event) => {
        if (messages.includes(event.message)) {
          event.preventDefault()
          console.warn(
            'Rerendering layout because of https://github.com/vuejs/core/issues/5513',
          )
          key.value++
        }
      })
    }

    // @ts-expect-error using arbitrary window key
    window.__vue5513 = true
  }

  return {
    key,
  }
}
