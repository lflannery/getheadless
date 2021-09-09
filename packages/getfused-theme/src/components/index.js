import React from 'react'
import { connect, Head, Global, css } from 'frontity'
import Switch from '@frontity/components/switch'
import Header from './header'
import Page from './page'
import Blog from './blog'
import Post from './post'
import Error from './error'
import Footer from './footer'

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
      <>
        <Head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
            </style>
        </Head>
        <Global
            styles= {css`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                html, body {
                    // margin: auto;
                    // max-width: 1792px;
                    font: 300 16px/24px 'Poppins', sans-serif;
                    background: #000;
                    color: #fff;
                }
                h1 {
                    font-size: 3.765rem;
                    font-weight: 500;
                    line-height: 2;
                }
                h2 {
                    font-size: 2.5rem;
                    font-weight: 500;
                    line-height: 1.2em;
                }
                h2.subtitle {
                    font-size: 1.412rem;
                    font-weight: 600;
                    line-height: 1.5;
                }
                h3 {
                    font-size: 1.75rem;
                    font-weight: 500;
                    line-height: 1.2;
                }
                .displayTitle {
                    font-size: 2.5rem;
                    font-weight: 500;
                    line-height: 1.2;
                    color: #000;
                    margin-bottom: 1.5rem;
                }
            a {
                color: #ffcc00;
                font-weight: 500;
                text-decoration: none;
            }
            `}
        />
        <Header />
        <Switch>
            <Page when={data.isPage} />
            <Post when={data.isPostType} />
            <Blog when={data.isArchive} />
            <Error />
        </Switch>
        <Footer />
      </>
    );
};

export default connect(Root)