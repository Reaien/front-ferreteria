import React from "react";
import Navbar from "../componentes/Navbar";
import Footer from "./Footer";
import { ProductoHomeContent } from "./Home/ProductoHomeContent";

const Home = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <ProductoHomeContent />
      <Footer />
    </React.StrictMode>
  );
};

export default Home;
