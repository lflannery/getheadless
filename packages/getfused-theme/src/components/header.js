import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'
import Logo from '../images/Logo.png'

const Header = ({ state }) => {
    const primaryMenuItems = state.source.get(`/menu/${state.theme.primaryMenu}/`).items;

    return (
      <HeaderSection>
          <a href="/">
            <img src={Logo} alt={state.theme.siteName} />
          </a>
            
            <Menu>
                {primaryMenuItems.map((item) => {
                    return (
                        <Link key={item.ID} link={item.url} target={item.target}>{item.title}</Link>
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