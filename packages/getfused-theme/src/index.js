import Root from './components'
import link from '@frontity/html2react/processors/link'
import menuHandler from './components/handlers/menu-handler';
import caseStudyHandler from './components/handlers/case-study-handler';
import teamHandler from './components/handlers/team-handler';
import recentBlogHandler from './components/handlers/recent-case-study-handler';
import recentCaseStudyHandler from './components/handlers/recent-case-study-handler';
import leadershipHandler from './components/handlers/leadership-handler';


const theme = {
  name: "getfused-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
        menu: [],
        primaryMenu: "main-nav",
        footerMenu: "footer-nav",
        socialMenu: "social-nav",
        siteName: "Getfused, Inc.",
        featured: {
          showOnList: false,
          showOnPost: false,
        },
      },
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/menu/${state.theme.primaryMenu}/`);
        await actions.source.fetch(`/menu/${state.theme.footerMenu}/`);
        await actions.source.fetch(`/menu/${state.theme.socialMenu}/`);
        await actions.source.fetch(`/recent-case-study`)
        await actions.source.fetch(`/leadership`)
      },
    },
  },
  libraries: {
    html2react: {
        processors: [link]
    },
    source: {
        handlers: [menuHandler, caseStudyHandler, teamHandler, recentCaseStudyHandler, leadershipHandler]
    },
  }
}

export default theme

