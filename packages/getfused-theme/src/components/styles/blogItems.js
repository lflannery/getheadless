import { styled } from 'frontity'

const BlogItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    color: #ccc;

    h3 a {
        font-weight: 500;
        color: #fff;
        &:hover {
            text-decoration: underline;
        }
    }
    .listingImage {
        max-width: 100%;
    }  
`
export default BlogItems;