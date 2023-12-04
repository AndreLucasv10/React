import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./pages/produtos/Produtos";
import Home from "./pages/home/Home";
const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;
