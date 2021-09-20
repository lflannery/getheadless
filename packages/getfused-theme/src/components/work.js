import React from 'react'
import { connect, Head, styled } from 'frontity'
import Link from '@frontity/components/link'



const Work = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    
    return (
      <>
        <Head>
            <title>Our Work - {state.theme.siteName}</title>
            <meta name="description" content="Portfolio Page" />
        </Head>
        <Main>
            <TopContent>
                <h1>Our Work</h1>
                <h2 className="subtitle">Drive your results.</h2>
            </TopContent>
            <Items>
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]

                    return (
                        <article className="listingItem" key={item.id} style={{background: `url(${post.acf.thumbnail})` }}>
                            <h3>
                                <Link link={post.link}>
                                    <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                </Link>
                            </h3>
                            <div dangerouslySetInnerHTML={{ __html: post.acf.subtitle }} />
                        </article>
                    )
                })}
            </Items> 
        </Main>
      </>
    );
};

export default connect(Work)

const Main = styled.main`
    max-width: 1792px;
    margin: auto;
`
const TopContent = styled.div`
    text-align: center;
`
const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #fff;
    font-weight: 500;
    text-align: center;

    .listingItem {
        min-height: 200px;
    }
`
const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`