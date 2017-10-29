import React from 'react'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { hydrate } from 'react-dom'

import './styles/main.scss'

import App from './components/app'
import configureStore from './store'
import debug from './utilities/debug'
import exceptions from './utilities/exceptions'

exceptions.init()

window.RIPETO_DEBUG = debug

if (process.env.NODE_ENV !== 'production') {
  debug.on('RIPETO:*')
}

const { persistor, store } = configureStore()

const Loading = () => <div>loading...</div>

const render = Root => {
  render(
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>
    </PersistGate>,
    document.getElementById('root')
  )
}

render(App)
