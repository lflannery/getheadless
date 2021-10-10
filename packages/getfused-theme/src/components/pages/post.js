import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import PostMain from '../styles/postMain'
import TopContent from '../styles/topContent'
import PostContent from '../styles/postContent'
import CallToAction from '../styles/calltoAction'

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
            </PostContent>
        </PostMain> 
      </>
    );
};

export default connect(Post)