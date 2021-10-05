import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import TopContent from '../styles/topContent'
import ContentSection from '../styles/contentSection'
import PageContent from '../styles/pageContent'
import ServiceGrid from '../styles/serviceGrid'
import MarketingPanel from '../styles/marketingPanel'
import Bottom from '../styles/bottom'
import FormBlock from '../styles/form-block'

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
                    <Link link="/link" className="yellowArrow">See our portfolio</Link>
                </div>
                { page.acf.case_studies ?
                <>
                {page.acf.case_studies.map((item) => {
                    const caseStudyImage = state.source[item.post_type][item.ID].acf.thumbnail
                    const caseStudyLink = state.source[item.post_type][item.ID].link

                    return (
                        <div key={item.ID}>
                            <a href={caseStudyLink}>
                                <img src={caseStudyImage} alt="" />
                            </a>
                        </div> 
                    )
                })}
                </>
                : null}
                <div>
                    <h2>Ready to take your brand to new levels of success?</h2>
                    <p>Get in touch with our team to get the conversation started. We look forward to partnering with you to achieve your marketing goals.</p>
                    <span className="cta">Let's drive your results</span>
                </div>
                <FormBlock>
                    <h2>Inquire Now</h2>
                    <div className="tagline">Let's create something beautiful</div>
                    <form action="" method="get">
                        <div className="field">
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" autoComplete="given-name" />
                        </div>
                        <div className="field">
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text" autoComplete="family-name" />
                        </div>
                        <div className="field">
                            <label htmlFor="companyName">Company Name</label>
                            <input id="companyName" type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email *</label>
                            <input id="email" type="text" autoComplete="email" required />
                        </div>
                        <div className="field last">
                            <label htmlFor="message">Tell us about the challenges you are facing</label>
                            <textarea id="message" rows="7" />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </FormBlock>     
            </Bottom>
        </main>
      </>
    );
};

export default connect(Page)