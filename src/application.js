import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Main from './containers/Main.jsx';
import About from './containers/About.jsx';
import Video from './containers/Video';

import { matchPath, Route, Router } from 'react-router'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import createBrowserHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'


const preloadedState = {}

let history
if (typeof(window) !== 'undefined'){
  history = createBrowserHistory()
}
else {
  history = createMemoryHistory() //This kind of history is needed for server-side rendering.
}

const routeMiddleWare = routerMiddleware(history)

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(
    routeMiddleWare,
    thunkMiddleware
  )
)

class Routes extends React.Component {
  constructor(props) {
    super(props)

    this.store = createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(
        thunkMiddleware
      )
    )
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/about" component={About} />
            <Route path="/video/:videoId?" component={Video} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
};

export default Routes;
