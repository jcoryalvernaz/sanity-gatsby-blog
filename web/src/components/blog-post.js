import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import Img from 'gatsby-image'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import BlogPostStyles from '../styles/BlogPostStyles'

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  return (
    <BlogPostStyles>
      {mainImage && mainImage.asset && (
        <Img
          fluid={mainImage.asset.fluid}
          alt={mainImage.alt}
        />
      )}
      <Container>
        <div className='grid'>
          <div className='mainContent'>
            <h1 className='title'>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className='metaContent'>
            {publishedAt && (
              <div className='publishedAt'>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {categories && (
              <div className='categories'>
                <h3 className='categoriesHeadline'>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </BlogPostStyles>
  )
}

export default BlogPost
