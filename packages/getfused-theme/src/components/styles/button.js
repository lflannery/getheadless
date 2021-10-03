import { styled } from 'frontity'

const Button = styled.button`
  background: #ffcc00;
  border: none;
  color: #000;
  padding: 1rem;
  display: inline;
  font-weight: 700;
  transition: all .3s;

  &:hover, &:focus {
    transform: translateY(-5px);
  }
`
export default Button;