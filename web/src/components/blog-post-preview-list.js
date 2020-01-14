import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import BlogPostPreviewListStyles from '../styles/BlogPostPreviewListStyles'

function BlogPostPreviewGrid (props) {
  return (
    <BlogPostPreviewListStyles>
      {props.title && <h2 className='headline'>{props.title}</h2>}
      <ul className='grid'>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className='browseMoreNav'>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </BlogPostPreviewListStyles>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
