import styled from 'styled-components'
import customMedia from '../styles/customMedia'

const BlogPostStyles = styled.article`
  .title {
  }
  .mainImage {
    display: block;
    position: relative;
    background: var(--color-very-light-gray);
    padding-bottom: calc(9 / 16 * 100%);
    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .grid {
    @media ${customMedia.minMedium} {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 2em;
      grid-template-columns: 3fr 1fr;
    }
  }
  .mainContent {
    a {
      color: var(--color-accent);
      @media (hover: hover) {
        &:hover {
          color: inherit;
        }
      }
    }
    figure {
      margin: 0;
      padding: 0;
      img {
        max-width: 100%;
      }
    }
  }
  .metaContent {
  }
  .publishedAt {
    margin: 2rem 0 3rem;
    color: var(--color-gray);
  }
  .categories {
    border-top: 1px solid var(--color-very-light-gray);
    margin: 2rem 0 3rem;
    ul {
      list-style: none;
      margin: 0.75rem 0;
      padding: 0;
    }
    ul li {
      padding: 0.25rem 0;
    }
  }
  .categoriesHeadline {
    margin: 0.5rem 0 0;
  }
`

export default BlogPostStyles
