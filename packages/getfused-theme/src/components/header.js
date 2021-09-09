import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

const Header = ({ state }) => {

    return (
      <HeaderSection>
          <img src="" alt="logo" />
          <Menu>
              <Link link="/work">Work</Link>
              <Link link="/services">Services</Link>
              <Link link="/about">About</Link>
              <Link link="/blog">Blog</Link>
              <Link link="/contact">Contact</Link>
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