import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import instumentos from "../../assets/img/instrumentos.png";

export const ProductoHomeContent = () => {
  const [herramienta, setHerramienta] = useState(null);

  const herramientaGet = async () => {
    await axios.get("http://127.0.0.1:8000/producto/1/").then((response) => {
      console.log(response.data);
      setHerramienta(response.data);
    });
  };
  // Llamada a la función para obtener los datos cuando el componente se monta
  useEffect(() => {
    herramientaGet();
  }, []);
  return (
    <>
      <section className="h-[456px] content-center text-center">
        <div className="text-6xl my-16 font-bold text-cyan-700">Producto</div>
        <div className="flex items-center justify-center">
          <div>
            <img src={instumentos} alt="logo" />
          </div>
          <div className="px-32">
            {herramienta && (
              <ul>
                <li>
                  <span className="font-bold">Nombre producto:</span>{" "}
                  {herramienta.nombre_producto}
                </li>
                <li>
                  <span className="font-bold">Valor producto:</span> $
                  {herramienta.valor_producto}
                </li>
                <li>
                  <span className="font-bold">Marca producto:</span>{" "}
                  {herramienta.marca_producto}
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
