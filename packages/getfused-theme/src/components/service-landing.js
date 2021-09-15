import React from 'react'
import { connect, Head, styled } from 'frontity'
import Link from '@frontity/components/link'



const Service = ({ state, libraries }) => {
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
            <ServiceGrid>
                { page.acf.service_1 ? 
                    <div>
                        <img src={page.acf.service_1.image} alt="" />
                        <Html2React html={page.acf.service_1.content} />
                    </div>
                : null }
                { page.acf.service_2 ? 
                    <div>
                        <img src={page.acf.service_2.image} alt="" />
                        <Html2React html={page.acf.service_2.content} />
                    </div>
                : null }
                { page.acf.service_3 ? 
                    <div>
                        <img src={page.acf.service_3.image} alt="" />
                        <Html2React html={page.acf.service_3.content} />
                    </div>
                : null }
            </ServiceGrid>
        </main>
      </>
    );
};

export default connect(Service)

const TopContent = styled.div`
  text-align: center;

  .featuredImage {
    margin: -2rem auto 0;
    display: block;
  }
`
const ServiceGrid = styled.div`
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
      margin-left: 2.5rem;
      margin-bottom: 1.5rem;

      li {
        list-style: none;
        margin-bottom: .8rem;
      }
  }

  p a {
    font-size: 1.5rem;
    font-weight: 500;
  }
`