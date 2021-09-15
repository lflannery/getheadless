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
                <h2 className="subtitle"><Html2React html={page.acf.subtitle} /></h2>
                { image ? 
                <img className="featuredImage" src={image.source_url} alt="" />
                : null }
            </TopContent>
            <ContentSection>
                <PageContent>
                    <Html2React html={page.content.rendered} />
                </PageContent>
                <Stats>
                    <div>
                        <div className="number">{page.acf.statistic_1.number}</div>
                        {page.acf.statistic_1.label}
                    </div>
                    <div>
                        <div className="number">{page.acf.statistic_2.number}</div>
                        {page.acf.statistic_2.label}
                    </div>
                    <div>
                        <div className="number">{page.acf.statistic_3.number}</div>
                        {page.acf.statistic_3.label}
                    </div>
                    <div>
                        <div className="number">{page.acf.statistic_4.number}</div>
                        {page.acf.statistic_4.label}
                    </div>
                    <div>
                        <div className="number">{page.acf.statistic_5.number}</div>
                        {page.acf.statistic_5.label}
                    </div>
                </Stats>
            </ContentSection>
            <Philanthropy>
                <Html2React html={page.acf.video} />
                <div>
                    <Html2React html={page.acf.philanthropy} />
                </div>
            </Philanthropy>
            <Logos>
                <div>
                    <img src={page.acf.logo_1.url} alt={page.acf.logo_1.alt} />
                </div>
                <div>
                    <img src={page.acf.logo_2.url} alt={page.acf.logo_2.alt} />
                </div>
                <div>
                    <img src={page.acf.logo_3.url} alt={page.acf.logo_3.alt} />
                </div>
                <div>
                    <img src={page.acf.logo_4.url} alt={page.acf.logo_4.alt} />
                </div>
                <div>
                    <img src={page.acf.logo_5.url} alt={page.acf.logo_5.alt} />
                </div>
                <div>
                    <img src={page.acf.logo_6.url} alt={page.acf.logo_6.alt} />
                </div>
            </Logos>
            <Approach>
                <Html2React html={page.acf.approach} />
            </Approach>
            <Bottom>
                <img src={page.acf.map} alt="" />
                <div className="content">
                    <Html2React html={page.acf.visit_us} />
                </div>
            </Bottom>
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
`
const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 19px;
  font-weight: 400;
  line-height: 1.8;
  padding: 3rem 2rem 6rem;

  .number {
      color: #ffcc00;
      font-weight: 600;
      font-size: 4.5rem;
      line-height: 1;
  }
`

const Philanthropy = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
  background: #1a1a1a;
  padding: 4rem;

  h2 {
      margin-bottom: 1.5rem;
  }

  iframe {
      justify-self: end;
  }
`

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  background: #fff;

  img {
      width: 100%;
      max-height: 150px;
      max-width: unset;
  }
`

const Approach = styled.div`
  margin: auto;
  max-width: 880px;
  padding: 2rem;

  a {
    font-size: 1.5rem;
    font-weight: 500;
    color: inherit;
  }
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