import { styled } from 'frontity'
import Bullet from '../../images/bullet-yellow.png'

const GridContent = styled.div`
    padding: 2.5rem 2rem 6rem;  
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.5rem;

    div {
        background: #1a1a1a;
        padding: 1rem;
    }

    img {
        max-width: 100%;
    }

    h2 {
    margin-bottom: 1.2rem;
    
    a {
        color: #fff;
    }
    }


    ul {
        margin-bottom: 1.5rem;

        li {
        list-style: none;
        margin-bottom: .8rem;
        &:before {
            background: url(${Bullet}) no-repeat 50%;
            content: '';
            display: inline-block;
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 1rem;
            vertical-align: bottom;
        }
        }
    }

    p a {
    font-size: 1.5rem;
    font-weight: 500;
    }
`
export default GridContent