import { ReactNode } from 'react'
import Header from '@components/header'
import Navigation from '@components/navigation'
import SEO, { SEOProps } from '@components/seo'

type PageProps = {
  children?: ReactNode
  meta?: SEOProps
}

const Page = ({ children, meta }: PageProps) => (
  <>
    <SEO {...meta} />
    <main>
      <Header />
      <Navigation />
      {children}
    </main>
  </>
)

export default Page
