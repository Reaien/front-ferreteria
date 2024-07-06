import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import { PruebaCards } from "../componentes/CrudAdmin/PruebaCards";

import React from "react";

const CrudAdmin = () => {
  return (
    <React.Fragment>
      <div>
        <Navbar />
      </div>
      <div>
        <PruebaCards />
      </div>
      <div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default CrudAdmin;
