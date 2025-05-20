import { SUPPORT_LANGUAGES } from '@/lib/i18n'
import type { PropsWithChildren } from 'react'

export async function generateStaticParams() {
  return SUPPORT_LANGUAGES.map((locale) => ({ locale }))
}

export default function LocaleLayout({ children }: PropsWithChildren) {
  return children
}
