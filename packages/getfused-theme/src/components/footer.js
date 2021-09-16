import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'
import moment from 'moment'

const Footer = ({ state }) => {
    const year = moment().format('YYYY');
    const footerMenuItems = state.source.get(`/menu/${state.theme.footerMenu}/`).items;
    const socialMenuItems = state.source.get(`/menu/${state.theme.socialMenu}/`).items;
    
    return (
      <FooterSection>
          <div className="credits">© {year} Getfused. All rights reserved.</div>
          <Menu>
          {footerMenuItems.map((item) => {
                return (
                    <Link key={item.ID} link={item.url} target={item.target}>{item.title}</Link>
                );
            })}
          </Menu>
          <Menu>
            {socialMenuItems.map((item) => {
                    return (
                        <Link key={item.ID} link={item.url} target={item.target} >{item.title}</Link>
                    );
                })}
          </Menu>
      </FooterSection>
    );
};

export default connect(Footer)

const FooterSection = styled.footer`
    background: #000;
    padding: 4rem 1rem 3rem 1rem;
    display: flex;
    justify-content: space-between;
    color: #fff;
`
const Menu = styled.nav`
    a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        margin-right: 4rem;
    }    
`