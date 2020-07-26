import React from 'react';
import { useRoutes } from 'react-router-dom';

import Splash from '../pages/Splash';
import Calculators from '../pages/Calculators';

const App = () =>
  useRoutes([
    { path: '/', element: <Splash /> },
    { path: 'calc/*', element: <Calculators /> },
  ]);

export default App;
