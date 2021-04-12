import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../header'
import './layout.css'

interface ILayoutProps {
  children: ReactNode
}

interface ISiteTitleQuery {
  site: {
    siteMetadata: {
      title?: string
    }
  }
}

const Layout = ({ children }: ILayoutProps): React.ReactElement => {
  const { site }: ISiteTitleQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`
          }}
        >
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

export default Layout
