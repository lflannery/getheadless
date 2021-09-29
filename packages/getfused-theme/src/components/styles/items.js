import { styled } from 'frontity'

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;
    
    h3 {
        color: #fff;
        &:hover {
            text-decoration: underline;
        }
    }
    div {
        color: #ccc;
        font-weight: normal;
    }
    .listingImage {
        max-width: 100%;
    }  
`
export default Items;