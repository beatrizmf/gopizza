import React from 'react';

import { OrderProvider } from './order';

const AppProvider: React.FC = ({ children }) => (
  <OrderProvider>{children}</OrderProvider>
);

export default AppProvider;
