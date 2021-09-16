import React from 'react'
import { connect, Head, styled } from 'frontity'
import Link from '@frontity/components/link'



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
                            {image ? 
                            <Link link={post.link} key={item.id}>
                                <img className="listingImage" src={image.source_url} alt={image.alt_text} />
                            </Link>
                            : null
                            }
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
            <PrevNextNav>
                {data.previous && (
                <button
                    onClick={() => {
                    actions.router.set(data.previous)
                    }}
                >
                    &#171; Prev
                </button>
                )}
                {data.next && (
                <button
                    onClick={() => {
                    actions.router.set(data.next)
                    }}
                >
                    Next &#187;
                </button>
                )}
            </PrevNextNav>
        </Main>
      </>
    );
};

export default connect(Blog)

const Main = styled.main`
    max-width: 1792px;
    margin: auto;
`

const CategoryList = styled.ul`
    display: flex;
    margin: 1rem 0 2rem;
`

const Category = styled.li`
    font-size: 2.5rem;
    padding: .875rem 3rem .875rem 0;
    list-style: none;

    a:hover {
        text-decoration: underline;
    }
`
const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    color: #ccc;

    h3 a {
        font-weight: 500;
        color: #fff;
        &:hover {
            text-decoration: underline;
        }
    }
    .listingImage {
        max-width: 100%;
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