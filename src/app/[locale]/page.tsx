import Loading from '@/components/loading'
import style from './page.module.scss'
import { createTranslation, DEFAULT_LANGUAGE, SUPPORT_LANGUAGES, type withLocaleProps } from '@/lib/i18n'
import SwitchLanguage from '@/components/switchLanguage'

export async function generateStaticParams() {
  return SUPPORT_LANGUAGES.map((locale) => ({ locale }))
}

export default async function Home({ params }: { params: Promise<withLocaleProps> }) {
  const locale = (await params).locale ?? DEFAULT_LANGUAGE
  const { t } = await createTranslation(locale, 'home')

  const title = `${t('home-title')} [${locale}]`

  return (
    <div className={style.container}>
      <h1>{title}</h1>
      <Loading>
        <SwitchLanguage locale={locale} />
      </Loading>
    </div>
  )
}
