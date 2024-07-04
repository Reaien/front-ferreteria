import React, { useState } from "react";
import { CardComponent } from "./CardComponent";
import { TableCompras } from "./TableCompras";

export const PruebaCards = () => {
  const [tablaCompras, setTablaCompras] = useState(false);

  return (
    <section>
      <div className="flex justify-center mt-52 text-center">
        <CardComponent
          title="Administrar Herramientas y stock"
          description="Revisa el stock de herramientas, agrega edita o elimina productos"
          buttonText="Consultar"
          onClick={() => {
            setTablaCompras(true);
          }}
        />
      </div>

      <section>{tablaCompras && <TableCompras />}</section>
    </section>
  );
};
