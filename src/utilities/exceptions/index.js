import Raven from 'raven-js'
import debug from 'debug'

let installed = false

const environment = process.env.EXCEPTION_TRACKING_ENV

const isTracked = [
  'production',
  'verification'
]

const ravenConfig = {
  environment,
  release: process.env.RELEASE,

  autoBreadcrumbs: {
    console: false,
    dom: true,
    location: true,
    xhr: false
  }
}


function init() {
  if (!installed && isTracked.includes(environment)) {
    Raven
      .config(process.env.EXCEPTION_TRACKING_TOKEN, ravenConfig)
      .install()

    installed = true

    debug('RIPETO:exception')('Exception tracking initialized')
  }
}

function setUser(ravenUserContext = undefined) {
  if (isTracked.includes(environment)) {
    Raven.setUserContext(ravenUserContext)

    debug('RIPETO:exception')('Exception tracking user context set')
  }
}

export default {
  init,
  setUser
}
