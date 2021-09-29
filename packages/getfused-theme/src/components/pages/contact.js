import React from 'react'
import { connect, Head } from 'frontity'
import TopContent from '../styles/topContent'
import ContentSection from '../styles/contentSection'
import PageContent from '../styles/pageContent'

const Contact = ({ state, libraries }) => {
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
            </TopContent>
            <ContentSection>
                <PageContent>
                    <Html2React html={page.content.rendered} />
                </PageContent>
            </ContentSection>
        </main>
      </>
    );
};

export default connect(Contact)