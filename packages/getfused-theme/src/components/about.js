import React from 'react'
import { connect, Head } from 'frontity'
import TopContent from './styles/topContent'
import ContentSection from './styles/contentSection'
import PageContent from './styles/pageContent'
import Stats from './styles/stats'
import Philanthropy from './styles/philanthropy'
import Logos from './styles/logos'
import Approach from './styles/approach'
import Directions from './styles/directions'

const About = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const image = state.source.attachment[page.featured_media]

    const Html2React = libraries.html2react.Component
    
    return (
      <>
        <Head>
            <title>{page.title.rendered}- {state.theme.siteName}</title>
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
            <Directions>
                <img src={page.acf.map} alt="" />
                <div className="content">
                    <Html2React html={page.acf.visit_us} />
                </div>
            </Directions>
        </main>
      </>
    );
};

export default connect(About)