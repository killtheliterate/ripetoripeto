import {
  applyMiddleware,
  compose as _compose,
  createStore
} from 'redux'

import { 
  persistStore,
  persistCombineReducers 
} from 'redux-persist'

import storage from 'redux-persist/es/storage'

// ---------------------------------------------------------------------------

import rootReducer from './reducers'

// ---------------------------------------------------------------------------

const compose = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || _compose

const persistConfig = {
  key: 'root',
  storage,
}
 
// ---------------------------------------------------------------------------

export default function () {
  const middleware = []

  const enhancer = compose(
    applyMiddleware(...middleware),
  )

  const store = createStore(
    persistCombineReducers(config, rootReducer),
    enhancer
  )

  const persistor = persistStore(store)
  
  return {
    persistor, 
    store 
  }
}
