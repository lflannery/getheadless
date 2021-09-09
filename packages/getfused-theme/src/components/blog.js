import React from 'react'
import { connect, Head, styled } from 'frontity'
import Link from '@frontity/components/link'



const Blog = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const categories = state.source.category
    
    return (
      <>
        <Main>
            <h1>Blog</h1>
            <h2>Sharing our ideas, insight, and experience</h2>
            <CategoryList>
                <Category><Link link={categories[18].link}>{categories[18].name}</Link></Category>
                <Category><Link link={categories[10].link}>{categories[10].name}</Link></Category>
                <Category><Link link={categories[11].link}>{categories[11].name.replace(/&amp;/g, "&")}</Link></Category>
            </CategoryList>
            <Items>
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    const image = state.source.attachment[post.featured_media]

                    return (
                        <>
                            <article className="listingItem" key={item.id}>
                                {image ? 
                                <Link link={image.link}>
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
                        </>              
                    )
                })}
            </Items>
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
    margin: 1rem 0;
`

const Category = styled.li`
    font-size: 2.5rem;
    padding: .875rem 1.5rem .875rem 0;
    list-style: none;
`
const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
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