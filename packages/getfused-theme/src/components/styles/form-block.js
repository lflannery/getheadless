import { styled } from 'frontity'

const FormBlock = styled.div`
    background: #ffcc00;
    color: #000;
    padding: 4rem 4rem 3rem;

    h2 {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: .5rem;
    }

    .tagline {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
    }

    form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem 2rem;
        margin-top: 2rem;

        .field.last {
            grid-column: 1/3;
        }
    }

    label {
        display: block;
    }

    input, textarea {
        width: 100%;
        border: none;
    }

    input {
        height: 40px;
    }

    button {
        background: #000;
        color: #fff;
        border: none;
        padding: 1rem 3rem;
        font-weight: 500;
        font-size: 1.25rem;
        transition: all .3s;
        grid-column: 2/2;
        justify-self: end;
        &:hover, &:focus {
            transform: translateY(-2px);
        }
      }
`
export default FormBlock;