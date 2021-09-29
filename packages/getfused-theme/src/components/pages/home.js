import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import TopContent from '../styles/topContent';
import ContentSection from '../styles/contentSection';
import PageContent from '../styles/pageContent';
import Title from '../styles/title'
import GridContent from '../styles/gridContent';
import Directions from '../styles/directions';

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
            <Title>
                <h2>
                    <Html2React html={page.acf.services_heading} />
                </h2>
            </Title>
            <GridContent>
                <div>
                    <img src={page.acf.service_1.image} alt="" />
                    <Html2React html={page.acf.service_1.content} />
                    <Link className="yellowArrow" link={page.acf.service_1.button_link}>{page.acf.service_1.button_text}</Link>
                </div>
                <div>
                    <img src={page.acf.service_2.image} alt="" />
                    <Html2React html={page.acf.service_2.content} />
                    <Link className="yellowArrow" link={page.acf.service_2.button_link}>{page.acf.service_2.button_text}</Link>
                </div>
                <div>
                    <img src={page.acf.service_3.image} alt="" />
                    <Html2React html={page.acf.service_3.content} />
                    <Link className="yellowArrow" link={page.acf.service_3.button_link}>{page.acf.service_3.button_text}</Link>
                </div>
            </GridContent>
            <Directions>
                <img src={page.acf.map} alt="" />
                <div className="content">
                    <Html2React html={page.acf.directions_content} />
                </div>
          </Directions>
        </main>
      </>
    );
};

export default connect(Page)