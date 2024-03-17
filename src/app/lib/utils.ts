import { inject, type InjectionKey } from 'vue'

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)
  if (!resolved) {
    throw new Error(`Could not resolve key: ${key.description}`)
  }
  return resolved
}

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ')
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
