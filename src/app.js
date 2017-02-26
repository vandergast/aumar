import React from 'react'
import ReactDOM from 'react-dom'
// import { createHashHistory, useBasename } from 'history'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import { graphql } from 'graphql'
import ncSchema from '../server/schema/index'

const query = '{hello}'

graphql(ncSchema, query).then(result => {
  console.log(result)
})

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component name='Daniel' />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
