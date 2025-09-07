/* eslint-disable unused-imports/no-unused-vars */
export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie('token')
  const config = useRuntimeConfig()

  // const { logout } = useAuthStore()

  const $customFetch = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    onRequest({ request, options, error }) {
      if (token.value) {
        options.headers.set('Authorization', `Bearer ${token.value}`)
      }
    },
    onResponse({ response }) {
      // response._data = new myBusinessResponse(response._data)
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        // logout()
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    },
  })

  return {
    provide: {
      customFetch: $customFetch,
    },
  }
})
