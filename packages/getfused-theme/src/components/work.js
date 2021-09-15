import React from 'react'
import { connect, Head, styled } from 'frontity'
import Link from '@frontity/components/link'



const Work = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const categories = state.source.category
    
    return (
      <>
        <Head>
            <title>Our Work</title>
            <meta name="description" content="Blog Page" />
        </Head>
        <Main>
            <h1>Our Work</h1>
        </Main>
      </>
    );
};

export default connect(Work)

const Main = styled.main`
    max-width: 1792px;
    margin: auto;
`

const CategoryList = styled.ul`
    display: flex;
    margin: 1rem 0 2rem;
`

const Category = styled.li`
    font-size: 2.5rem;
    padding: .875rem 3rem .875rem 0;
    list-style: none;

    a:hover {
        text-decoration: underline;
    }
`
const Items = styled.div`
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
const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`