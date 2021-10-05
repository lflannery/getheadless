import React from 'react'
import { connect, Head } from 'frontity'
import Bottom from '../styles/bottom'
import FormBlock from '../styles/form-block'

const Contact = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    const Html2React = libraries.html2react.Component
    
    return (
      <>
        <Head>
            <title>{page.title.rendered}- {state.theme.siteName}</title>
            <meta name="description" content={page.excerpt.rendered} />
        </Head>
        <main>
            <Bottom>
                <div>
                    <h1><Html2React html={page.title.rendered} /></h1>
                    <Html2React html={page.content.rendered} />
                </div>
                <FormBlock>
                    <h2>Inquire Now</h2>
                    <div className="tagline">Let's create something beautiful</div>
                    <form action="" method="get">
                        <div className="field">
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" autoComplete="given-name" />
                        </div>
                        <div className="field">
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text" autoComplete="family-name" />
                        </div>
                        <div className="field">
                            <label htmlFor="companyName">Company Name</label>
                            <input id="companyName" type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email *</label>
                            <input id="email" type="text" autoComplete="email" required />
                        </div>
                        <div className="field last">
                            <label htmlFor="message">Tell us about the challenges you are facing</label>
                            <textarea id="message" rows="7" />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </FormBlock> 
            </Bottom>
        </main>
      </>
    );
};

export default connect(Contact)