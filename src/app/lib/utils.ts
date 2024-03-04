import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
// import { camelize, getCurrentInstance, toHandlerKey } from 'vue'
import { inject, type InjectionKey } from 'vue'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)
  if (!resolved) {
    throw new Error(`Could not resolve key: ${key.description}`)
  }
  return resolved
}
