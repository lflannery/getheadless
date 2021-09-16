import React from 'react'
import { connect, Head, styled } from 'frontity'
import Link from '@frontity/components/link'



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