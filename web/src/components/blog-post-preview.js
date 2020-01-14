import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import BlogPostPreviewStyles from '../styles/BlogPostPreviewStyles'

function BlogPostPreview (props) {
  return (
    <BlogPostPreviewStyles>
      <Link
        className={props.isInList ? 'inList' : 'inGrid'}
        to={getBlogUrl(props.publishedAt, props.slug.current)}
      >
        <div className='leadMediaThumb'>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto('format')
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
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
