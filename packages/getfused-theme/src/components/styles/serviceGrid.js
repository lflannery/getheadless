import { styled } from 'frontity'
import Bullet from '../../images/bullet.png'

const ServiceGrid = styled.div`
  max-width: 1140px;
  margin: auto;  
  padding: 0 0 5rem;  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.5rem 1rem;

  ul {
    padding: 0;
    margin: 2rem 0 0 2.5rem ;
    text-indent: -2.5rem;
  }

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
`
export default ServiceGrid;