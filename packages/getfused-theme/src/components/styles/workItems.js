import { styled } from 'frontity'

const WorkItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #fff;
    font-weight: 500;
    text-align: center;

    .listingItem {
        min-height: 200px;
    }
`
export default WorkItems;