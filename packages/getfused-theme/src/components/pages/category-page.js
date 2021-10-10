import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import Main from '../styles/main'
import Items from '../styles/items'
import Pagination from '../styles/pagination'
import Button from '../styles/button'

const CategoryPage = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const categoryName = state.source.category[data.id].name
    
    return (
      <>
        <Head>
            <title> {categoryName} Blog Posts - {state.theme.siteName}</title>
            <meta name="description" content="Category Page" />
        </Head>
        <Main>
            <h1 dangerouslySetInnerHTML={{ __html: categoryName + ` Blog Posts`}}  />
            <Link className="yellowArrow" link="/blog">All Posts</Link>
           <Items>
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    const image = state.source.attachment[post.featured_media]

                    return (
                        <article className="listingItem" key={item.id}>
                            <Link link={post.link}>
                                {image ? 
                                <img className="listingImage" src={image.source_url} alt={image.alt_text} />
                                : null
                                }
                                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                <div dangerouslySetInnerHTML={{ __html: post.acf.subtitle }} />
                            </Link>
                        </article>
                    )
                })}
            </Items> 
            <Pagination>
                {data.previous && (
                <Button
                    onClick={() => {
                    actions.router.set(data.previous)
                    }}
                >
                    &#171; Prev
                </Button>
                )}
                {data.next && (
                <Button
                    onClick={() => {
                    actions.router.set(data.next)
                    }}
                >
                    Next &#187;
                </Button>
                )}
            </Pagination>
        </Main>
      </>
    );
};

export default connect(CategoryPage)