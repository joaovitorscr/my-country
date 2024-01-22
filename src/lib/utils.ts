import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function numberFormat(n: number) {
  return new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 }).format(n)
}
