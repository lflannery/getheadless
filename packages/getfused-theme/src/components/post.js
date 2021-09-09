import React from 'react'
import { connect, Head, styled } from 'frontity'
import Link from '@frontity/components/link'

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    
    return (
      <>
        <Head>
            <title>{post.title.rendered}</title>
            <meta name="description" content={post.excerpt.rendered} />
        </Head>
        <Main>
            <ContentSection>
                <h1>{post.title.rendered}</h1>
                <h2><div dangerouslySetInnerHTML={{ __html: post.acf.subtitle }} /></h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </ContentSection>
        </Main> 
      </>
    );
};

export default connect(Post)

const Main = styled.main`
    background: #fff;
    color: #000;
`
const ContentSection = styled.div`
  max-width: 932px;
  margin: auto;
  padding: 2rem 0 2.2rem 0;

  h1 {
      line-height: 1;
  }

  p, ul, h1, h2 {
      margin-bottom: 1.5rem;
  }
  
  ul {
      padding-left: 3rem;
  }
`
