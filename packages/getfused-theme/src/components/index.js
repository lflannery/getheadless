import React from 'react'
import { connect, Head, Global, css } from 'frontity'
import Switch from '@frontity/components/switch'
import Header from './pages/header'
import Home from './pages/home'
import SearchResults from "./pages/search/search-results";
import Service from './pages/service-landing'
import About from './pages/about'
import Team from './pages/team'
import Contact from './pages/contact'
import Page from './pages/page'
import Work from './pages/work'
import Blog from './pages/blog'
import Post from './pages/post'
import Error from './pages/error'
import Loading from './pages/loading'
import Footer from './pages/footer'
import YellowArrow from '../images/arrow.png'
import WhiteArrow from '../images/whiteArrow.png'
import BlackArrow from '../images/blackArrow.png'

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
      <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500" rel="stylesheet" />
        </Head>
        <Global
            styles= {css`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                html, body {
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
                    &:after {
                        content: '';
                        display: inline-block;
                        width: 1rem;
                        height: 1rem;
                        margin-left: .5rem;
                        vertical-align: middle;
                        transition: ease-in-out .2s;
                    }
                    &.yellowArrow {
                        &:after {
                            background: url(${YellowArrow}) no-repeat 50%;
                            background-size: contain;
                        }
                        &:hover:after {
                            transform: translateX(4px);
                        }
                    }
                    &.whiteArrow {
                        &:after {
                            background: url(${WhiteArrow}) no-repeat 50%;
                            background-size: contain;
                        }
                        &:hover:after {
                            transform: translateX(4px);
                        }
                    }
                    &.blackArrow {
                        &:after {
                            background: url(${BlackArrow}) no-repeat 50%;
                            background-size: contain;
                        }
                        &:hover:after {
                            transform: translateX(4px);
                        }
                    }
                }
                p {
                    margin-bottom: 1.5rem;
                }
            `}
        />
        <Header />
        <Switch>
            <Loading when={data.isFetching} />
            <Home when={data.isHome} />
            <SearchResults when={data.isSearch} />
            <Work when={data.route === "/work/"} />
            <Blog when={data.route === "/blog/"} />
            <Service when={data.route === "/services/"} />
            <About when={data.route === "/about/"} />
            <Team when={data.route === "/about/team/"} />
            <Contact when={data.route === "/contact/"} />
            <Page when={data.isPage} />
            <Post when={data.isPostType} />
            <Error when={data.isError} />
        </Switch>
        <Footer />
      </>
    );
};

export default connect(Root)