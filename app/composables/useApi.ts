import type { UseFetchOptions } from 'nuxt/app'

export function useAPI<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {},
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$customFetch,
  })
}

export function apiFetchAsyncData<T>(url: string, options: any = {}) {
  return useNuxtApp().$customFetch<T>(url, options)
}
