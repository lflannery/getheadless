import React from 'react'
import { connect } from 'frontity'
import Link from '@frontity/components/link'
import moment from 'moment'
import HeaderFooter from './styles/headerFooter'
import Menu from './styles/menu'

const Footer = ({ state }) => {
    const year = moment().format('YYYY');
    const footerMenuItems = state.source.get(`/menu/${state.theme.footerMenu}/`).items;
    const socialMenuItems = state.source.get(`/menu/${state.theme.socialMenu}/`).items;
    
    return (
        <footer>
            <HeaderFooter>
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
                            <Link key={item.ID} link={item.url} target={item.target} className={item.classes.join(" ")} >{item.title}</Link>
                        );
                    })}
                </Menu>
            </HeaderFooter>
        </footer>
    );
};

export default connect(Footer)

