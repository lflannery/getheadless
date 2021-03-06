import { styled } from 'frontity'
import Facebook from '../../images/Facebook-Negative.svg'
import LinkedIn from '../../images/LinkedIn.svg'
import Twitter from '../../images/Twitter-Negative.svg'

const Menu = styled.nav`
    a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        margin-right: 4rem;
        &:hover, &:focus {
            text-decoration: underline;
        }
    }   
    .social {
        font-size: 0px;
        margin-right: 0;
        &:hover:before, &:focus:before {
            transform: translateY(-5px);
        }
        &:before {
            content: '';
            width: 2rem;
            height: 2rem;
            display: inline-block;
            transition: all .3s;
        }
        &.facebook:before {
            background: url(${Facebook}) 50% no-repeat;
        }
        &.twitter:before {
            background: url(${Twitter}) 50% no-repeat;
        }
        &.linkedin:before {
            background: url(${LinkedIn}) 50% no-repeat;
        }
    } 
`
export default Menu;