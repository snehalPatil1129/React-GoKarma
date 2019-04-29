import React from 'react';
import { Provider } from 'react-redux';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { Router, Route, Switch } from 'react-router-dom';

import { configureStore, history } from './store';

import App from './container/App';

// css
import './lib/reactifyCss';

const MainApp = () => (
    <Provider store={configureStore()}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Router history={history}>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        </MuiPickersUtilsProvider>
    </Provider>
);

export default MainApp;