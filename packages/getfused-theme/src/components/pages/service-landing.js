import React from 'react'
import { connect, Head } from 'frontity'
import TopContent from '../styles/topContent'
import GridContent from '../styles/gridContent'

const Service = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    const Html2React = libraries.html2react.Component
    
    return (
      <>
        <Head>
            <title>{page.title.rendered} - {state.theme.siteName}</title>
            <meta name="description" content={page.excerpt.rendered} />
        </Head>
        <main>
            <TopContent>
                <h1><Html2React html={page.title.rendered} /></h1>
            </TopContent>
            <GridContent>
                { page.acf.service_1 ? 
                    <div>
                        <img src={page.acf.service_1.image} alt="" />
                        <Html2React html={page.acf.service_1.content} />
                    </div>
                : null }
                { page.acf.service_2 ? 
                    <div>
                        <img src={page.acf.service_2.image} alt="" />
                        <Html2React html={page.acf.service_2.content} />
                    </div>
                : null }
                { page.acf.service_3 ? 
                    <div>
                        <img src={page.acf.service_3.image} alt="" />
                        <Html2React html={page.acf.service_3.content} />
                    </div>
                : null }
            </GridContent>
        </main>
      </>
    );
};

export default connect(Service)