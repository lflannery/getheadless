import React from 'react'
import { connect, Head } from 'frontity'
import PostMain from '../styles/postMain'
import TopContent from '../styles/topContent'
import PostContent from '../styles/postContent'
import CaseStudyServices from '../styles/caseStudyServices'

const CaseStudy = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    
    return (
      <>
        <Head>
            <title>{post.title.rendered} - {state.theme.siteName}</title>
            {/* <meta name="description" content={post.excerpt.rendered} /> */}
        </Head>
        <PostMain>
            <TopContent>
                { post.acf.hero_image ? 
                <img className="featuredImage" src={post.acf.hero_image} alt="" />
                : null }
            </TopContent>
            <PostContent>
                <h1>{post.title.rendered}</h1>
                <h2>Overview</h2>
                <div dangerouslySetInnerHTML={{ __html: post.acf.overview }} />
                <h2>Mission</h2>
                <div dangerouslySetInnerHTML={{ __html: post.acf.mission }} />
                <h2>Services</h2>
                { post.acf.services.length !== 0 ?
                <CaseStudyServices>
                {post.acf.services.map((item) => {
                    const id = post.acf.services.indexOf(item)

                    return (
                        <div key={id}>
                            <div className={'image ' + item}></div>
                            <span>{item}</span>
                        </div>
                    )
                })}
                </CaseStudyServices>
                : null } 
                <div dangerouslySetInnerHTML={{ __html: post.acf.services_content }} />
            </PostContent>
        </PostMain> 
      </>
    );
};

export default connect(CaseStudy)