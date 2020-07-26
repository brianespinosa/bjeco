import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalculatorsLayout from '../../layouts/CalculatorsLayout';
import BlockTable from '../../components/BlockTable';

const Calculators = () => {
  return (
    <CalculatorsLayout>
      <h1>Calculators</h1>
      <Routes>
        <Route path=':width/:height' element={<BlockTable />} />
      </Routes>
    </CalculatorsLayout>
  );
};

export default Calculators;
