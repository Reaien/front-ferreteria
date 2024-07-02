import { useState, useEffect } from "react";
import React from "react";
import { Modal } from "./Modal";
import { FormDespacho } from "./FormDespacho";
import axios from "axios";

export const TableCompras = () => {
  const [herramientas, setHerramientas] = useState([]);

  const herramientasGet = async () => {
    await axios.get("http://127.0.0.1:8000/producto/").then((response) => {
      console.log(response.data.results);
      setHerramientas(response.data.results);
    });
  };
  // Llamada a la función para obtener los datos cuando el componente se monta
  useEffect(() => {
    herramientasGet();
  }, []);

  //state que controla el modal
  const [openModal, setOpenModal] = useState(false);

  //state que abre el modal junto con la data del id seleccionado
  const [herramientaSeleccionada, setherramientaSeleccionada] = useState(null);
  const handleAbrirModal = (herramientas) => {
    setherramientaSeleccionada(herramientas);
    setOpenModal(true);
  };

  return (
    <>
      <section className="grid text-center grid-cols-12 mb-8">
        <div className="col-span-12 flex justify-center">
          <div className="col-span-10 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-full overflow-hidden">
            <table className="table-fixed">
              <thead>
                <tr className="py-10">
                  <th className="pr-10">Código Marca</th>
                  <th className="pr-10">Marca Producto</th>
                  <th className="pr-10">Nombre producto</th>
                  <th className="pr-10">Tipo producto</th>
                  <th className="pr-10">Valor</th>
                </tr>
              </thead>
              <tbody>
                {herramientas.map((herramientas) => (
                  <tr key={herramientas.id}>
                    <td className="pr-10 py-10 items-center">
                      {herramientas.id}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {herramientas.codigo_marca}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {herramientas.marca_producto}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {herramientas.nombre_producto}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {herramientas.valor_producto}
                    </td>
                    <td>
                      <button
                        onClick={() => handleAbrirModal(herramientas)}
                        className="py-1 bg-yellow-200 px-8 rounded-xl shadow-md hover:bg-yellow-400 transition-all duration-300 "
                      >
                        Editar
                      </button>
                      <button className="py-1 bg-red-400 px-8 rounded-xl shadow-md hover:bg-orange-600 transition-all duration-300 ">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Modal
        onClose={() => {
          setOpenModal(false);
        }}
        open={openModal}
      >
        {ventaSeleccionada && (
          <FormDespacho
            venta={ventaSeleccionada}
            onClose={() => {
              //onclose es un prop que pasa funciones al modal con el form abierto, por ende al cerrarse, se ejecutan esas 2 funciones
              setOpenModal(false), compras();
            }}
          />
        )}
      </Modal>
    </>
  );
};
