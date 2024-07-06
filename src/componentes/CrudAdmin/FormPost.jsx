import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
export const FormPost = ({ onClose }) => {
  const { register, reset, handleSubmit } = useForm();
  const [tipoProducto, SetTipoProducto] = useState([]);

  const tipoProductoGet = async () => {
    await axios.get("http://127.0.0.1:8000/tipoProducto/").then((response) => {
      console.log(response.data.results);
      SetTipoProducto(response.data.results);
    });
  };
  // Llamada a la función para obtener los datos cuando el componente se monta
  useEffect(() => {
    tipoProductoGet();
  }, []);

  const herramientaPost = async (data) => {
    const jsonData = {
      marca_producto: data.marca_producto,
      codigo_marca: data.codigo_marca,
      nombre_producto: data.nombre_producto,
      valor_producto: data.valor_producto,
      tipo_herramienta: data.tipo_producto,
    };
    try {
      await axios.post("http://127.0.0.1:8000/producto/", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      Swal.fire({
        title: "Herramienta agregada ✅!",
        text: "La herramienta ha sido agregada con éxito en la base de datos",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      console.log(error);
    }
    onClose();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(herramientaPost)}
        className="flex flex-col justify-center text-center px-24 text-xl"
      >
        <div className="mx-auto text-3xl font-bold mb-10 text-teal-600">
          Ingreso de orden de despacho
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Marca Producto</label>
          <input
            type="text"
            placeholder="Ingresar marca de producto"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("marca_producto", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Código Marca</label>
          <input
            type="text"
            placeholder="Ingresa código de la marca"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("codigo_marca", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Nombre Producto</label>
          <input
            type="text"
            placeholder="Ingresar nombre de producto"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("nombre_producto", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Valor Producto</label>
          <input
            type="text"
            placeholder="Ingresar valor de producto"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("valor_producto", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Tipo de Producto</label>
          <select
            defaultValue="A"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("tipo_producto", { required: true })}
          >
            <option value="A">Elige tipo de herramienta</option>
            {tipoProducto.map((tipoProducto) => (
              <option key={tipoProducto.id} value={tipoProducto.id}>
                {tipoProducto.tipo_herramienta}
              </option>
            ))}
            ;
          </select>
        </div>
        <button
          className="py-6 px-14 rounded-lg bg-teal-600 text-white font-bold mb-14"
          type="submit"
        >
          Editar Herramienta
        </button>
      </form>
    </>
  );
};
