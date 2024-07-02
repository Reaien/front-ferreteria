import React, { useState } from "react";
import { CardComponent } from "./CardComponent";
import { TableCompras } from "./TableCompras";

export const PruebaCards = () => {
  const [tablaCompras, setTablaCompras] = useState(false);
  const [tablaOrdenes, setTablaOrdenes] = useState(false);

  return (
    <section>
      <div className="flex justify-center mt-52 ">
        <CardComponent
          title="Consultar Herramientas y stock"
          description="Revisa el stock de herramientas"
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
