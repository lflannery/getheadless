import React from 'react'
import { connect, Head } from 'frontity'
import Link from '@frontity/components/link'
import PostMain from '../styles/postMain'
import PostContent from '../styles/postContent'
import CallToAction from '../styles/calltoAction'

const Post = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    
    return (
      <>
        <Head>
            <title>{post.title.rendered} - {state.theme.siteName}</title>
            {/* <meta name="description" content={post.excerpt.rendered} /> */}
        </Head>
        <PostMain>
            <PostContent>
                <h1>{post.title.rendered}</h1>
                <h2><div dangerouslySetInnerHTML={{ __html: post.acf.subtitle }} /></h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                { post.acf.call_to_action ? 
                    <CallToAction>
                        <div dangerouslySetInnerHTML={{ __html: post.acf.call_to_action }} />
                        <Link link={post.acf.cta_link}>{post.acf.cta_label}</Link>
                    </CallToAction>
                : null }
            </PostContent>
        </PostMain> 
      </>
    );
};

export default connect(Post)