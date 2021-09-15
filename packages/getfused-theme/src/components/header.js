import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

const Header = ({ state }) => {
    const primaryMenuItems = state.source.get(`/menu/${state.theme.primaryMenu}/`).items;

    return (
      <HeaderSection>
            <img src="" alt="logo" />
            <Menu>
                {primaryMenuItems.map((item) => {
                    return (
                        <Link key={item.ID} link={item.url}>{item.title}</Link>
                    );
                })}
            </Menu>
      </HeaderSection>
    );
};

export default connect(Header)

const HeaderSection = styled.header`
    background: #000;
    padding: 4rem 1rem 3rem 1rem;
    display: flex;
    justify-content: space-between;
`
const Menu = styled.nav`
    a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        margin-right: 4rem;
    }    
`