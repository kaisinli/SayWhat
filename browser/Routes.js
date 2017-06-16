import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory, Redirect } from 'react-router'
import Input from './Input.js'
import store from './store'


ReactDOM.render(
    <Provider store={store}>
        <Router history = {browserHistory}>
            <Route path = "/" component={Input} />
        </Router>
    </Provider>,
    document.getElementById('main')

)