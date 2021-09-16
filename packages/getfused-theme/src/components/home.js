import React from 'react'
import { connect, Head, styled } from 'frontity'
import Link from '@frontity/components/link'

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const image = state.source.attachment[page.featured_media]

    const Html2React = libraries.html2react.Component
    
    return (
      <>
        <Head>
            <title>{page.title.rendered} - {state.theme.siteName}</title>
            <meta name="description" content={page.excerpt.rendered} />
        </Head>
        <main>
            <TopContent>
                <img className="featuredImage" src={image.source_url} alt="" />
            </TopContent>
            <ContentSection>
                <PageContent>
                    <Html2React html={page.content.rendered} />
                </PageContent>
            </ContentSection>
            <ServicesTitle>
                <h2>
                    <Html2React html={page.acf.services_heading} />
                </h2>
            </ServicesTitle>
            <ServiceGrid>
                <div>
                    <img src={page.acf.service_1.image} alt="" />
                    <Html2React html={page.acf.service_1.content} />
                    <Link link={page.acf.service_1.button_link}>{page.acf.service_1.button_text}</Link>
                </div>
                <div>
                    <img src={page.acf.service_2.image} alt="" />
                    <Html2React html={page.acf.service_2.content} />
                    <Link link={page.acf.service_2.button_link}>{page.acf.service_2.button_text}</Link>
                </div>
                <div>
                    <img src={page.acf.service_3.image} alt="" />
                    <Html2React html={page.acf.service_3.content} />
                    <Link link={page.acf.service_3.button_link}>{page.acf.service_3.button_text}</Link>
                </div>
            </ServiceGrid>
            <Bottom>
                <img src={page.acf.map} alt="" />
                <div className="content">
                    <Html2React html={page.acf.directions_content} />
                </div>
          </Bottom>
        </main>
      </>
    );
};

export default connect(Page)

const TopContent = styled.div`
  text-align: center;

  .featuredImage {
    margin: -3rem auto 0;
    max-width: 100%;
  }
`
const ContentSection = styled.div`
  background: #fff;
  color: #000;
  border-top: 14px solid #ffcc00;
  padding: 5.7rem 1rem;
`
const PageContent = styled.div`
  margin: auto;
  max-width: 880px;
  font-size: 1.176rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`
const ServicesTitle = styled.div`
  text-align: center;
  padding-top: 3rem;
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

  h3 {
      margin-bottom: 1rem;
  }

  a {
    font-size: 1.25rem;
    font-weight: 500;
  }
`
const MarketingPanel = styled.div`
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 6.2rem 0 6.5rem 0;
`
const Bottom = styled.div` 
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  background: #ffcc00;
  color: #000;

  img {
      width: 100%;
      height: 450px;
      object-fit: cover;
  }

  .content {
      padding: 2rem;

      h2 {
          margin-bottom: 1.5rem;
      }
      
      a {
        font-size: 1.5rem;
        font-weight: 500;
        color: #000;
      }
  }
`