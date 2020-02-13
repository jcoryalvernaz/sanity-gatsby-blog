import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

function SEO ({description, lang, meta, keywords, title, image, imageAlt, isPost}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || (data.site && data.site.siteMetadata.description) || ''
        const siteTitle = (data.site && data.site.siteMetadata.title) || ''
        const siteAuthor = (data.site && data.site.siteMetadata.author && data.site.siteMetadata.author.name) || ''
        const metaImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : ''

        return (
          <Helmet
            htmlAttributes={{lang}}
            title={title}
            titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: isPost ? 'article' : 'website'
              },
              {
                name: 'twitter:creator',
                content: siteAuthor
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                metaImage
                  ? [
                    {property: 'og:image', content: metaImage},
                    {
                      property: 'og:image:alt',
                      content: imageAlt
                    },
                    {
                      name: 'twitter:image',
                      content: metaImage
                    },
                    {
                      name: 'twitter:image:alt',
                      content: imageAlt
                    },
                    {
                      name: 'twitter:card',
                      content: 'summary_large_image'
                    }
                  ]
                  : [
                    {
                      name: 'twitter:card',
                      content: 'summary'
                    }
                  ]
              )
              .concat(
                keywords && keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  image: {},
  imageAlt: '',
  isPost: false
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  imageAlt: PropTypes.string,
  isPost: PropTypes.bool
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: {eq: "siteSettings"}) {
      siteMetadata {
        title
        description
        keywords
      }
      author {
        name
      }
    }
  }
`
