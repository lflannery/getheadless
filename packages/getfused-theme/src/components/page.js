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
                <h1><Html2React html={page.title.rendered} /></h1>
                <h2 className="subtitle"><Html2React html={page.acf.subtitle} /></h2>
                { image ? 
                <img className="featuredImage" src={image.source_url} alt="" />
                : null }
            </TopContent>
            <ContentSection>
                <PageContent>
                    <Html2React html={page.acf.page_content} />
                </PageContent>
                <ServiceGrid>
                    { page.acf.service_info_1 ? 
                        <div>
                            <Html2React html={page.acf.service_info_1} />
                        </div>
                    : null }
                    { page.acf.service_info_2 ? 
                        <div>
                            <Html2React html={page.acf.service_info_2} />
                        </div>
                    : null }
                    { page.acf.service_info_3 ? 
                        <div>
                            <Html2React html={page.acf.service_info_3} />
                        </div>
                    : null }
                    { page.acf.service_info_4 ? 
                        <div>
                            <Html2React html={page.acf.service_info_4} />
                        </div>
                    : null }
                    { page.acf.service_info_5 ? 
                        <div>
                            <Html2React html={page.acf.service_info_5} />
                        </div>
                    : null }
                    { page.acf.service_info_6 ? 
                        <div>
                            <Html2React html={page.acf.service_info_6} />
                        </div>
                    : null }
                </ServiceGrid>
                { page.acf.heading ? 
                    <MarketingPanel>
                        <h2>{page.acf.heading}</h2>
                        { page.acf.logos.image_1 ? <img src={page.acf.logos.image_1} alt="" /> : null  }
                        { page.acf.logos.image_2 ? <img src={page.acf.logos.image_2} alt="" /> : null  }
                        { page.acf.logos.image_3 ? <img src={page.acf.logos.image_3} alt="" /> : null  }
                        { page.acf.logos.image_4 ? <img src={page.acf.logos.image_4} alt="" /> : null  }
                        { page.acf.logos.image_5 ? <img src={page.acf.logos.image_5} alt="" /> : null  }
                        { page.acf.logos.image_6 ? <img src={page.acf.logos.image_6} alt="" /> : null  }
                    </MarketingPanel>
                : null  }
            </ContentSection>
            <Bottom>
                <div>
                    <span>Get Inspired</span>
                    <h2 className="featuredWork">Featured <Html2React html={page.title.rendered} /> work</h2>
                    <Link link="/link" className="cta">See our portfolio</Link>
                </div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <div>
                    <h2>Ready to take your brand to new levels of success?</h2>
                    <p>Get in touch with our team to get the conversation started. We look forward to partnering with you to achieve your marketing goals.</p>
                    <span className="cta">Let's drive your results</span>
                </div>
                <form></form>
            </Bottom>
        </main>
      </>
    );
};

export default connect(Page)

const TopContent = styled.div`
  text-align: center;

  .featuredImage {
    margin: -2rem auto 0;
    display: block;
  }
`
const ContentSection = styled.div`
  background: #fff;
  color: #000;
  border-top: 14px solid #ffcc00;
  padding-top: 5.7rem;
`
const PageContent = styled.div`
  margin: auto;
  max-width: 880px;
  font-size: 1.176rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 1.5rem;
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
const MarketingPanel = styled.div`
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 6.2rem 0 6.5rem 0;

  h2 {
      margin-bottom: 2.5rem;
  }

  img {
      margin: 0 1rem;
  }
`
const Bottom = styled.div`
  margin: auto;  
  max-width: 1792px;  
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  grid-gap: 3.5rem 1rem;
  padding-top: 6.5rem;

  h2 {
    font-size: 3.75vw;
    &.featuredWork {
      padding: 10% 0% 10% 0%;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5em;
    margin-bottom: 3rem;
  }

  .cta {
    font-size: 1.5rem;
    font-weight: 500;
  }
`