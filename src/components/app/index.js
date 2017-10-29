import React, {
  Component
} from 'react'

import {
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router'

// ---------------------------------------------------------------------------

class App extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default withRouter(App)
