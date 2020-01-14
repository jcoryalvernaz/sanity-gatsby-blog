import styled from 'styled-components'

const AuthorListStyles = styled.div`
  margin: 2rem 0 3rem;
  border-top: 1px solid var(--color-very-light-gray);
  .headline {
    margin: 0.5rem 0 0;
  }
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .listItem {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div:last-child {
      flex: 1;
      margin-left: 0.5rem;
    }
  }
  .avatar {
    position: relative;
    width: 3em;
    height: 3em;
    background: var(--color-very-light-gray);
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
    }
  }
`

export default AuthorListStyles
