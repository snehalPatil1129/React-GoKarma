/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import { SpringSpinner } from 'react-epic-spinners';
import { IntlProvider } from 'react-intl';
import { Redirect, Route } from 'react-router-dom';

// app routes
import MainApp from '../routes';

// app signin
import AppSignIn from './SigninFirebase';
import AppSignUp from './SignupFirebase';

// App locale


import successTheme from './themes/successTheme';

// async components
import {
  AsyncSessionLoginComponent,
  AsyncSessionRegisterComponent,
  AsyncSessionLockScreenComponent,
  AsyncSessionForgotPasswordComponent,
  AsyncSessionPage404Component,
  AsyncSessionPage500Component,
  AsyncAboutUsComponent
} from '../components/AsyncComponent/AsyncComponent';

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, ...rest, authUser }) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />}
  />;

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    let self = this;
    setTimeout(() => {
      self.setState({ loading: false });
    }, 1000);
  }

  render() {
    const { locale, rtlLayout } = this.props.settings;
    if (this.state.loading) {
      return (
        <div className="rct-loader">
          <SpringSpinner />
        </div>
      );
    }
    if (this.props.location.pathname === '/') {
      if (this.props.user === null) {
        return (<Redirect to={'/signin'} />);
      } else {
        return (<Redirect to={'/app/dashboard'} />);
      }
    }
    // theme changes

    let theme = successTheme;
    

    if (rtlLayout) {
      theme.direction = 'rtl'
    } else {
      theme.direction = 'ltr'
    }
    return (
      <MuiThemeProvider theme={theme}>
        
          <React.Fragment>
            <InitialPath path={`${this.props.match.url}app`} authUser={this.props.user} component={MainApp} />
            <Route path="/signin" component={AppSignIn} />
            <Route path="/signup" component={AppSignUp} />
            <Route path="/session/login" component={AsyncSessionLoginComponent} />
            <Route path="/session/register" component={AsyncSessionRegisterComponent} />
            <Route path="/session/lock-screen" component={AsyncSessionLockScreenComponent} />
            <Route path="/session/forgot-password" component={AsyncSessionForgotPasswordComponent} />
            <Route path="/session/404" component={AsyncSessionPage404Component} />
            <Route path="/session/500" component={AsyncSessionPage500Component} />
          </React.Fragment>
       
      </MuiThemeProvider>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings, authUser }) => {
  const { user } = authUser;
  return { settings, user };
};

export default connect(mapStateToProps)(App);
