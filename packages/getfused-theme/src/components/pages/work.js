import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import Main from '../styles/main'
import TopContent from '../styles/topContent'
import Items from '../styles/items'

const Work = ({ state }) => {
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
            <Items className="wide">
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]

                    return (
                        <article className="listingItem" key={item.id}>
                            <Link link={post.link}>
                                <img className="listingImage" src={post.acf.thumbnail} alt='' />
                                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                <div dangerouslySetInnerHTML={{ __html: post.acf.subtitle }} />
                            </Link>
                        </article>
                    )
                })}
            </Items> 
        </Main>
      </>
    );
};

export default connect(Work)