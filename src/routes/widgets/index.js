/**
 * Pages Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
  AsyncUserWidgetComponent,
  AsyncUserChartsComponent,
  AsyncMiscellaneousWidgetsComponent,
  AsyncPromoWidgetsComponent
} from '../../components/AsyncComponent/AsyncComponent';

const Pages = ({ match }) => (
  <div className="content-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/user`} />
      <Route path={`${match.url}/user`} component={AsyncUserWidgetComponent} />
      <Route path={`${match.url}/charts`} component={AsyncUserChartsComponent} />
      <Route path={`${match.url}/miscellaneous`} component={AsyncMiscellaneousWidgetsComponent} />
      <Route path={`${match.url}/promo`} component={AsyncPromoWidgetsComponent} />
    </Switch>
  </div>
);

export default Pages;
