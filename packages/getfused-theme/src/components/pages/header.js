import React from 'react'
import { connect } from 'frontity'
import Link from '@frontity/components/link'
import HeaderFooter from '../styles/headerFooter'
import Menu from '../styles/menu'
import Logo from '../../images/Logo.png'
import Search from '../../images/search.svg'
import SearchForm from './search/search-form'

const Header = ({ state }) => {
    const primaryMenuItems = state.source.get(`/menu/${state.theme.primaryMenu}/`).items;

    return (
        <header>
            <HeaderFooter>
                <a href="/">
                    <img src={Logo} alt={state.theme.siteName} />
                </a>
                <Menu>
                    {primaryMenuItems.map((item) => {
                        return (
                            <Link key={item.ID} link={item.url} target={item.target}>{item.title}</Link>
                        );
                    })}
                    <SearchForm />
                </Menu>
            </HeaderFooter>
        </header>
    );
};

export default connect(Header)

