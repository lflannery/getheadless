import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import PostMain from '../styles/postMain'
import TopContent from '../styles/topContent'
import PostContent from '../styles/postContent'
import RelatedPosts from '../styles/relatedPosts'
import CallToAction from '../styles/calltoAction'
import Author from '../styles/author'
import Items from '../styles/items'

const Post = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    
    return (
      <>
        <Head>
            <title>{post.title.rendered} - {state.theme.siteName}</title>
        </Head>
        <PostMain>
            <TopContent>
                { post.acf.hero_image ? 
                <img className="featuredImage" src={post.acf.hero_image} alt="" />
                : null }
            </TopContent>
            <PostContent>
                <h1>{post.title.rendered}</h1>
                <h2>
                { post.acf.subtitle ?
                <div dangerouslySetInnerHTML={{ __html: post.acf.subtitle }} />
                : post.acf.job_title ?
                <div dangerouslySetInnerHTML={{ __html: post.acf.job_title }} />
                : null }
                </h2>
                { post.content ?
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                : post.acf.bio ?
                <div dangerouslySetInnerHTML={{ __html: post.acf.bio }} />
                : null }
                { post.acf.call_to_action ? 
                    <CallToAction>
                        <div dangerouslySetInnerHTML={{ __html: post.acf.call_to_action }} />
                        <Link link={post.acf.cta_link} className="yellowArrow">{post.acf.cta_label}</Link>
                    </CallToAction>
                : null }
                { post.type === "post" && post.acf.authorPosts ?
                <Author>
                    <h2 className="subtitle">About the Author</h2>
                    {post.acf.authorPosts.map((item) => {
                        const image = state.source[item.post_type][item.ID].acf.thumbnail_image
                        const link = state.source[item.post_type][item.ID].link
                        const title = state.source[item.post_type][item.ID].title.rendered
                        const jobTitle = state.source[item.post_type][item.ID].acf.job_title
                        const firstName = state.source[item.post_type][item.ID].acf.first_name

                        return (
                            <div className="item" key={item.ID}>
                                <img src={image} alt="" />
                                <div>
                                    
                                    <p>{title}</p>
                                    <div>
                                        <span>{jobTitle} | </span>
                                        <Link link={link}>More about {firstName}</Link>
                                    </div>
                                </div>
                            </div> 
                        )
                    })}
                </Author>
                : null} 
            </PostContent>
            <RelatedPosts>
            {post.type === "team" && post.acf.authorPosts ?
                <>
                    <h2>Blog Posts</h2>
                    <Items className="wide">  
                        {post.acf.authorPosts.map((item) => {
                            const post = state.source[item.post_type][item.ID]
                            const image = state.source.attachment[post.featured_media]
                            const link = state.source[item.post_type][item.ID].link
                            const title = state.source[item.post_type][item.ID].title.rendered
                            const subtitle = state.source[item.post_type][item.ID].acf.subtitle

                            return (
                                <article className="listingItem" key={item.ID}>
                                    <Link link={link}>
                                        <img className="listingImage" src={image.source_url} alt="" />
                                        <h3 dangerouslySetInnerHTML={{ __html: title }} />
                                        <div dangerouslySetInnerHTML={{ __html: subtitle }} />
                                    </Link>
                                </article>
                            )
                        })}
                    </Items>
                </>
            : null }
            { post.type === "post" && post.acf.related_blogs ?
                <>
                    <h2>You Might Also Like</h2>
                    <Items className="wide">  
                        {post.acf.related_blogs.map((item) => {
                            const post = state.source[item.post_type][item.ID]
                            const image = state.source.attachment[post.featured_media]
                            const link = state.source[item.post_type][item.ID].link
                            const title = state.source[item.post_type][item.ID].title.rendered
                            const subtitle = state.source[item.post_type][item.ID].acf.subtitle

                            return (
                                <article className="listingItem" key={item.ID}>
                                    <Link link={link}>
                                        <img className="listingImage" src={image.source_url} alt="" />
                                        <h3 dangerouslySetInnerHTML={{ __html: title }} />
                                        <div dangerouslySetInnerHTML={{ __html: subtitle }} />
                                    </Link>
                                </article>
                            )
                        })}
                    </Items>
                </>
                : null}
            </RelatedPosts>
        </PostMain> 
      </>
    );
};

export default connect(Post)