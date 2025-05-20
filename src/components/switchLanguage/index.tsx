'use client'

import { DEFAULT_LANGUAGE, SUPPORT_LANGUAGES, type SUPPORT_LANGUAGE } from '@/lib/i18n'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SwitchLanguage({ locale = DEFAULT_LANGUAGE }) {
  const router = useRouter()
  const [language, setLanguage] = useState<SUPPORT_LANGUAGE>(locale)

  const changeLanguage = (locale: SUPPORT_LANGUAGE) => {
    setLanguage(locale)
    router.push(`/${locale}`)
  }

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value as SUPPORT_LANGUAGE)}
    >
      {SUPPORT_LANGUAGES.map((locale) => (
        <option
          key={locale}
          value={locale}
        >
          {locale}
        </option>
      ))}
    </select>
  )
}
