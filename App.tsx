import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Employers from './pages/Employers';
import Employees from './pages/Employees';
import { Impressum, Datenschutz } from './pages/Legal';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="arbeitgeber" element={<Employers />} />
          <Route path="ratgeber" element={<Employees />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;