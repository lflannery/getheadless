import React from "react";
import { connect, Head } from "frontity";
import Link from '@frontity/components/link'
import SearchForm from "./search-form";
import Main from '../../styles/main'
import TopContent from "../../styles/topContent";
import Items from '../../styles/items'
import Pagination from '../../styles/pagination'
import Button from "../../styles/button";

const SearchResults = ({ state, libraries, actions }) => {
  // Get the current path or link
  const currentPath = state.router.link;
  const data = state.source.get(state.router.link)

  // Get the total pages that match the current path/url
  const { total } = state.source.data[currentPath];
  const isEmpty = total === 0;

  // Parse to current url to get the search query
  const parse = libraries.source.parse(state.router.link);

  // Parse returns an object whose query string is stored in "s"
  const searchQuery = parse.query["s"];

  return (
    <>
        <Head>
            <title>Search Results for {searchQuery} - {state.theme.siteName}</title>
        </Head>
        <Main>
            <TopContent>
                {isEmpty ? 
                    <>
                        <h1>No Results found</h1>
                        <p>We could not find any results for {searchQuery}. You can give it another try through the search form below.</p>
                    </>
                 : 
                    <h1>{total} {total === 1 ? "result" : "results"} found for: {searchQuery}</h1>
                }
                <SearchForm /> 
            </TopContent>
            <Items>
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    const image = state.source.attachment[post.featured_media]

                    return (
                        <article className="listingItem" key={item.id}>
                            <Link link={post.link}>
                                {image ? 
                                <img className="listingImage" src={image.source_url} alt="" />
                                : post.acf.thumbnail ? <img className="listingImage" src={post.acf.thumbnail} alt="" />
                                : <img className="listingImage" src={post.acf.thumbnail_image} alt='' />}
                                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                { post.acf.job_title ?
                                <div dangerouslySetInnerHTML={{ __html: post.acf.job_title }} />
                                : <div dangerouslySetInnerHTML={{ __html: post.acf.subtitle }} />
                                }
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

export default connect(SearchResults);