import { createInstance, KeyPrefix } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

/**
 * 支持语言列表
 */
export const SUPPORT_LANGUAGES = ['en', 'de', 'fr', 'es', 'it', 'nl', 'pt', 'ar', 'ja'] as const satisfies string[]
export type SUPPORT_LANGUAGES = typeof SUPPORT_LANGUAGES

/**
 * 支持的语言
 */
export type SUPPORT_LANGUAGE = SUPPORT_LANGUAGES[number]

/**
 * 语言对应全称
 */
export const SUPPORT_LANGUAGES_FULL_NAME = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  nl: 'Netherlands',
  pt: 'Português',
  ar: 'عربى',
  ja: 'Japan',
} as const satisfies Record<SUPPORT_LANGUAGE, string>
export type SUPPORT_LANGUAGES_FULL_NAME = typeof SUPPORT_LANGUAGES_FULL_NAME

/**
 * 右到左方向排列语言列表
 */
export const RTL_LANGUAGES: Array<SUPPORT_LANGUAGE> = ['ar']

/**
 * 语言资源命名空间列表
 */
export const LANGUAGE_NAMESPACES = ['common', 'home'] as const satisfies string[]
export type LANGUAGE_NAMESPACES = typeof LANGUAGE_NAMESPACES

/**
 * 语言资源命名空间
 */
export type LANGUAGE_NAMESPACE = LANGUAGE_NAMESPACES[number]

/**
 * 默认语言
 */
export const DEFAULT_LANGUAGE: SUPPORT_LANGUAGE = 'en'

/**
 * 默认命名空间
 */
export const DEFAULT_NAMESPACE: LANGUAGE_NAMESPACE = 'common'

export type withLocaleProps = { locale: SUPPORT_LANGUAGE }

const initI18next = async (lng: SUPPORT_LANGUAGE, ns: LANGUAGE_NAMESPACE) => {
  const i18nInstance = createInstance()

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend<SUPPORT_LANGUAGE, LANGUAGE_NAMESPACE>(
        (lng: SUPPORT_LANGUAGE, ns: LANGUAGE_NAMESPACE) => import(`#/locales/${lng}/${ns}.json`),
      ),
    )
    .init({
      supportedLngs: SUPPORT_LANGUAGES,
      fallbackLng: DEFAULT_LANGUAGE,
      lng,
      fallbackNS: DEFAULT_NAMESPACE,
      defaultNS: DEFAULT_NAMESPACE,
      ns,
    })

  return i18nInstance
}

export async function createTranslation(
  lng: SUPPORT_LANGUAGE,
  ns: LANGUAGE_NAMESPACE,
  options?: KeyPrefix<LANGUAGE_NAMESPACE>,
) {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT<LANGUAGE_NAMESPACE, string>(lng, Array.isArray(ns) ? ns[0] : ns, options),
    i18n: i18nextInstance,
  }
}
