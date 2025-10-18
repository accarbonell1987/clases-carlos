import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PokeDetails from '../views/PokeDetails';
import PokeList from '../views/PokeList';

const PokeRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PokeList />} />
      <Route path="/list" element={<PokeList />} />
      <Route path="/pokemon/details/:id" element={<PokeDetails />} />
      <Route path="*" element={<p>RUTA NO EXISTENTE</p>} />
    </Routes>
  </BrowserRouter>
);

export default PokeRoutes;
