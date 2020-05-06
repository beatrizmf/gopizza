import React from 'react';
import {
  RouteProps as ReactDOMProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

import Layout from '../components/Layout';

import AppProvider from '../hooks';

interface ReactProps extends ReactDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<ReactProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
        <AppProvider>
          <Layout>
            <Component />
          </Layout>
        </AppProvider>
      )}
    />
  );
};

export default Route;
