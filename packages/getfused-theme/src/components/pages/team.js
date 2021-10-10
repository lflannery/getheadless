import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import Main from '../styles/main'
import TopContent from '../styles/topContent'
import Items from '../styles/items'

const Team = ({ state }) => {
    const data = state.source.get(state.router.link)
    
    return (
      <>
        <Head>
            <title>Our Team - {state.theme.siteName}</title>
            <meta name="description" content="Meet Your Team" />
        </Head>
        <Main>
            <TopContent>
                <h1>Meet Your Team</h1>
                <h2 className="subtitle">Dedicated. Professional. Relatable.</h2>
            </TopContent>
            <Items>
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]

                    return (
                        <article className="listingItem" key={item.id}>
                            <Link link={post.link}>
                                <img className="listingImage" src={post.acf.thumbnail_image} alt='' />
                                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                <div dangerouslySetInnerHTML={{ __html: post.acf.job_title }} />
                            </Link>
                        </article>
                    )
                })}
            </Items> 
        </Main>
      </>
    );
};

export default connect(Team)