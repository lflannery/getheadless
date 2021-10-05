import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import Main from '../styles/main'
import CategoryList from '../styles/categoryList'
import Category from '../styles/category'
import Items from '../styles/items'
import Pagination from '../styles/pagination'
import Button from '../styles/button'

const Blog = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    const categories = state.source.category
    
    return (
      <>
        <Head>
            <title>Blog - {state.theme.siteName}</title>
            <meta name="description" content="Blog Page" />
        </Head>
        <Main>
            <h1>Blog</h1>
            <h2>Sharing our ideas, insight, and experience</h2>
            <CategoryList>
                <Category><Link link={categories[2].link}>{categories[2].name}</Link></Category>
                <Category><Link link={categories[6].link}>{categories[6].name}</Link></Category>
                <Category><Link link={categories[7].link}>{categories[7].name.replace(/&amp;/g, "&")}</Link></Category>
            </CategoryList> 
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
                                <h3><span dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></h3>
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

export default connect(Blog)