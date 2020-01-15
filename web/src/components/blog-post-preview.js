import {format} from 'date-fns'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import {getBlogUrl} from '../lib/helpers'
import PortableText from './portableText'

import BlogPostPreviewStyles from '../styles/BlogPostPreviewStyles'

function BlogPostPreview (props) {
  return (
    <BlogPostPreviewStyles>
      <Link
        className={props.isInList ? 'inList' : 'inGrid'}
        to={getBlogUrl(props.publishedAt, props.slug.current)}
      >
        {props.mainImage && props.mainImage.asset && (
          <Img
            fluid={props.mainImage.asset.fluid}
            alt={props.mainImage.alt}
          />
        )}
        <div className='text'>
          <h3 className='title'>{props.title}</h3>
          {props._rawExcerpt && (
            <div className='excerpt'>
              <PortableText blocks={props._rawExcerpt} />
            </div>
          )}
          <div className='date'>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
        </div>
      </Link>
    </BlogPostPreviewStyles>
  )
}

export default BlogPostPreview
