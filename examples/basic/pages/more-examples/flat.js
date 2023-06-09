import useTranslation from 'next-translate/useTranslation'

import Header from '../../components/header'

export default function MoreExamples() {
  const { t } = useTranslation('flat')
  const example = t('nested.flat.key')

  return (
    <>
      <Header />
      <h2>{example}</h2>
    </>
  )
}
