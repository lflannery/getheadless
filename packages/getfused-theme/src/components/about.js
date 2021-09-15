import React from 'react'
import { connect, Head, styled } from 'frontity'
import Link from '@frontity/components/link'



const About = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const image = state.source.attachment[page.featured_media]

    const Html2React = libraries.html2react.Component
    
    return (
      <>
        <Head>
            <title>{page.title.rendered}</title>
            <meta name="description" content={page.excerpt.rendered} />
        </Head>
        <main>
            <TopContent>
                <h1><Html2React html={page.title.rendered} /></h1>
            </TopContent>
        </main>
      </>
    );
};

export default connect(About)

const TopContent = styled.div`
  text-align: center;

  .featuredImage {
    margin: -2rem auto 0;
    display: block;
  }
`
const ServiceGrid = styled.div`
  max-width: 1140px;
  margin: auto;  
  padding: 5rem 0;  
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
      content: '';
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 1rem;
      vertical-align: bottom;
    }
  }
`