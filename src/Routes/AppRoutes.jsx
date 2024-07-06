import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrudAdmin from "../componentes/CrudAdmin.jsx";
import Home from "../componentes/Home.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crud" element={<CrudAdmin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
