import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

interface ISEOProps {
  description?: string,
  lang?: string,
  meta?: Array<{ name: string, content: string }>,
  title: string
}

interface ISite {
  site: {
    siteMetadata: {
      title: string,
      description: string,
      author: string
    }
  }
}

function SEO({ description = '', lang = 'nl', meta = [], title }: ISEOProps) {
  const { site }: ISite = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription: string = description || site.siteMetadata.description
  const defaultTitle: string = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ''}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

export default SEO