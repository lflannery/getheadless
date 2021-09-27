import { styled } from 'frontity'

const Directions = styled.div` 
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  background: #ffcc00;
  color: #000;

  img {
      width: 100%;
      height: 450px;
      object-fit: cover;
  }

  .content {
      padding: 2rem;

      h2 {
          margin-bottom: 1.5rem;
      }
      
      a {
        font-size: 1.5rem;
        font-weight: 500;
        color: #000;
      }
  }
`
export default Directions