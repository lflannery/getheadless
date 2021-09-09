import Root from './components'
import link from '@frontity/html2react/processors/link'

const theme = {
  name: "getfused-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default theme
