import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory, Redirect } from 'react-router'
import Input from './Input'
import store from './store'


render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Input} />
        </Router>
    </Provider>,
    document.getElementById('main')

)