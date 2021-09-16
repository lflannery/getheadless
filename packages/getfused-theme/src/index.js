import Root from './components'
import link from '@frontity/html2react/processors/link'
import menuHandler from './components/handlers/menu-handler';


const theme = {
  name: "getfused-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
        autoPrefetch: "in-view",
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
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    },
    source: {
        handlers: [menuHandler],
      },
  }
}

export default theme

