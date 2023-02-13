import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ScrollToTop from './scrollToTop';

import Layout from '../layout';

import Dashboard from '../pages/admin/Dashboard';
const AppRoutes: React.FC = () => (
  <>
    <ScrollToTop>
      <Switch>
        <Layout>
          <Route path="/" exact component={Dashboard} />
        </Layout>
      </Switch>
    </ScrollToTop>
  </>
);

export default AppRoutes;