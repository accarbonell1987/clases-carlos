import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokeView from "../pokeView";
import PokeList from "../component/pokeList";
import PokeDetails from "../component/pokeDetails";

const PokeRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PokeView />} />
      <Route path="/poke/details/:id" element={<PokeDetails />} />
      <Route path="*" element={<p>RUTA NO EXISTENTE</p>} />
    </Routes>
  </BrowserRouter>
);
export default PokeRoutes;
