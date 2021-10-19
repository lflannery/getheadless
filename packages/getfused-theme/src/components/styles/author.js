import { styled } from 'frontity'

const Author = styled.div`
  background: #1a1a1a;
  color: #fff;
  padding: 1.5rem 2rem .5rem;
  margin: 3rem 0;
  
  .item {
    display: grid;
    grid-template-columns: 13% 85%;
    grid-gap: 2%;
    align-items: center;
    margin: 1.5rem 0;
  }

  p {
      font-weight: 500;
      margin-bottom: 0;
  }

  img {
    width: 100%;
    max-width: 88px;
    border-radius: 50%;
    align-self: end;
  }

  a {
      color: #ffcc00;
      text-decoration: none;
      &:hover, &:focus {
          text-decoration: underline;
      }
  }
`
export default Author;