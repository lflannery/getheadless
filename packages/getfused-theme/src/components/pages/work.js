import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import Main from '../styles/main'
import TopContent from '../styles/topContent'
import BlogItems from '../styles/blogItems'
import Pagination from '../styles/pagination'

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
            <BlogItems>
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    const image = state.source.attachment[post.featured_media]

                    return (
                        <article className="listingItem" key={item.id}>
                            
                            <Link link={post.link} key={item.id}>
                                <img className="listingImage" src={post.acf.thumbnail} alt='' />
                            </Link>
                            <h3>
                                <Link link={post.link}>
                                    <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                </Link>
                            </h3>
                            <div dangerouslySetInnerHTML={{ __html: post.acf.subtitle }} />
                        </article>
                    )
                })}
            </BlogItems> 
        </Main>
      </>
    );
};

export default connect(Work)