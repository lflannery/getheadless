import { styled } from 'frontity'
import Marketing from '../../images/MarketingStrategy.svg'
import Content from '../../images/content-creation.svg'
import Social from '../../images/social-advertising.svg'
import Search from '../../images/paid-search.svg'
import Email from '../../images/email-marketing.svg'
import Design from '../../images/design.svg'

const CaseStudyServices = styled.div`
    padding: 2.5rem 0 6rem;  
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-weight: 500;

    div.image {
        content: '';
        display: block;
        width: 5rem;
        height: 5rem;
        margin: auto;
    }

    .Marketing {
        background: url(${Marketing}) 50% no-repeat;
    }

    .Content {
        background: url(${Content}) 50% no-repeat;
    }

    .Social {
        background: url(${Social}) 50% no-repeat;
    }

    .Search {
        background: url(${Search}) 50% no-repeat;
    }

    .Email {
        background: url(${Email}) 50% no-repeat;
    }

    .Design {
        background: url(${Design}) 50% no-repeat;
    }
`
export default CaseStudyServices