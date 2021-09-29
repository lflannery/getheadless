import { styled } from 'frontity'

const Form = styled.form`
  display: inline-block;

  button {
    background: #ffcc00;
    color: #000;
    border: none;
    height: 46px;
    padding: 0 1rem;
    font-weight: 700;
    transition: all .3s;
    &:hover, &:focus {
        transform: translateY(-2px);
    }
  }
`
export default Form;