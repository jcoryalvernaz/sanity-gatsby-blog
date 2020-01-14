import styled from 'styled-components'
import customMedia from './customMedia'

const BlogPostPreviewStyles = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }
  .inList {
    @media ${customMedia.minMedium} {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 2em;
    }
  }
  .inGrid {
  }
  .leadMediaThumb {
    position: relative;
    padding-bottom: 66.666%;
    background: var(--color-very-light-gray);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text {
  }
  .excerpt {
    p {
      margin: 0.5em 0;
    }
    strong {
      font-weight: 600;
    }
  }
  .date {
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
    color: var(--color-gray);
  }
`

export default BlogPostPreviewStyles
