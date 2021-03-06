import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './App'

const Root = (props) => (
  <Provider store={configureStore()}>
    <App {...props} />
  </Provider>
)

export default Root
