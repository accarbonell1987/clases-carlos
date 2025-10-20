import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokeBrowser from "../component/PokeBrowser";
import PokeDetails from "../component/pokeDetails";

const PokeRoutes = () => {
  const [listOfPokes, setListOfPokes] = useState([]);

  const handleOnChangeList = (pokes) => {
    setListOfPokes([...pokes]);
  }

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<PokeBrowser listOfPokes={listOfPokes} handleOnChangeList={handleOnChangeList} />} />
      <Route path="/poke/details/:id" element={<PokeDetails />} />
      <Route path="*" element={<p>RUTA NO EXISTENTE</p>} />
    </Routes>
  </BrowserRouter>
}

export default PokeRoutes;
