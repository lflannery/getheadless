import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'
import moment from 'moment'

const Footer = ({ state }) => {
    const year = moment().format('YYYY');
    
    return (
      <FooterSection>
          <div className="credits">© {year} Getfused. All rights reserved.</div>
          <Menu>
              <Link link="/">Home</Link>
              <Link link="/work">Work</Link>
              <Link link="/services">Services</Link>
              <Link link="/about">About</Link>
              <Link link="/contact">Contact</Link>
              <Link link="/privacy-policy">Privacy Policy</Link>
          </Menu>
          <Menu>
              <Link link="https://www.facebook.com/Getfused" target="_blank">Facebook</Link>
              <Link link="https://www.linkedin.com/company/getfused/mycompany/" target="_blank">LinkedIn</Link>
              <Link link="https://twitter.com/Getfused" target="_blank">Twitter</Link>
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