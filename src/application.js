import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import { Route, Link } from 'react-router-dom'
import Main from './containers/Main.jsx';
import About from './containers/About.jsx';
import Video from './containers/Video';

import { matchPath } from 'react-router'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const preloadedState = {}

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(
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
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <h1>Sample Roulette</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Route path="/" exact component={Main} />
              <Route path="/about" component={About} />
              <Route path="/getvideo" component={Video} />
            </Col>
          </Row>
        </Grid>
      </Provider>
    )
  }
};

export default Routes;
