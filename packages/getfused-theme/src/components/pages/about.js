import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import TopContent from '../styles/topContent'
import ContentSection from '../styles/contentSection'
import PageContent from '../styles/pageContent'
import Stats from '../styles/stats'
import Philanthropy from '../styles/philanthropy'
import Logos from '../styles/logos'
import Approach from '../styles/approach'
import Directions from '../styles/directions'
import Items from '../styles/items'
import Placeholder from '../../images/placeholder.jpg'

const About = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const image = state.source.attachment[page.featured_media]
    const leadership = state.source.get(`/leadership`)

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
            <Items className="wide">
                <article className="listingItem">
                    <Link link="/about/team">
                        <img className="listingImage" src={Placeholder} alt='' />
                        <h3>Meet the Team</h3>
                    </Link>
                </article>
                {leadership.items.map((item) => {
                    const post = state.source[item.type][item.id]

                    return (
                        <article className="listingItem" key={item.id}>
                            <Link link={post.link} key={item.id}>
                                <img className="listingImage" src={post.acf.thumbnail_image} alt='' />
                                <h3><span dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></h3>
                                <div dangerouslySetInnerHTML={{ __html: post.acf.job_title }} />
                            </Link>
                        </article>
                    )
                })}
            </Items> 
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