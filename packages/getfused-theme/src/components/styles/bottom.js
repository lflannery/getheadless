import { styled } from 'frontity'

const Bottom = styled.div`
  margin: auto;  
  max-width: 1792px;  
  display: grid;
  grid-template: auto/repeat(2, 1fr);
  grid-gap: 3.5rem 1rem;
  align-items: center;
  padding-top: 6.5rem;

  h2 {
    font-size: 3.75vw;
    &.featuredWork {
      padding: 10% 0% 10% 0%;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5em;
    margin-bottom: 3rem;
  }

  a {
    font-size: 1.5rem;
    font-weight: 500;
  }

  img {
      width: 100%;
  }
`
export default Bottom;