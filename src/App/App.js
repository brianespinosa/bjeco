import Calculators from '../pages/Calculators';
import React from 'react';
import Splash from '../pages/Splash';
import { useRoutes } from 'react-router-dom';

const App = () =>
  useRoutes([
    {
      element: <Splash />,
      path: '/',
    },
    {
      element: <Calculators />,
      path: 'calc/*',
    },
  ]);

export default App;
