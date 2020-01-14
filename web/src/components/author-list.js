import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import AuthorListStyles from '../styles/AuthorListStyles'

function AuthorList ({items, title}) {
  return (
    <AuthorListStyles>
      <h2 className='headline'>{title}</h2>
      <ul className='list'>
        {items.map(({author, _key}) => {
          const authorName = author && author.name
          return (
            <li key={_key} className='listItem'>
              <div>
                <div className='avatar'>
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=''
                    />
                  )}
                </div>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </AuthorListStyles>
  )
}

export default AuthorList
