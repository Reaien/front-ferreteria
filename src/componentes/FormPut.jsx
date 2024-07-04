import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

export const FormPut = ({ herramienta, onClose }) => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("onSubmit ejecutado");
    const jsonData = {
      marca_producto: data.marca_producto,
      codigo_marca: data.codigo_marca,
      nombre_producto: data.nombre_producto,
      valor_producto: data.valor_producto,
    };

    console.log("Datos del formulario:", jsonData);

    try {
      await axios.put(
        `http://127.0.0.1:8000/producto/${herramienta.id}/`,
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      reset();
      //reset fx from useForm
      Swal.fire({
        title: "Herramienta editada 🛠️!",
        text: "La herramienta ha sido editada con éxito en la base de datos",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
    onClose();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center text-center px-24 text-xl"
      >
        <div className="mx-auto text-3xl font-bold mb-10 text-teal-600">
          Ingreso de orden de despacho
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">ID de herramienta</label>
          <input
            type="number"
            disabled={true}
            value={herramienta.id}
            className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Código de marca</label>
          <input
            type="text"
            defaultValue={herramienta.codigo_marca}
            className="border border-gray-300 rounded-lg block w-full  p-1"
            {...register("codigo_marca", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Marca producto</label>
          <input
            type="text"
            defaultValue={herramienta.marca_producto}
            className="border border-gray-300 rounded-lg block w-full  p-1"
            {...register("marca_producto", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Nombre herramienta</label>
          <input
            type="text"
            defaultValue={herramienta.nombre_producto}
            className="border border-gray-300 rounded-lg block w-full  p-1"
            {...register("nombre_producto", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Valor de herramienta</label>
          <input
            type="number"
            defaultValue={herramienta.valor_producto}
            className="border border-gray-300 rounded-lg block w-full  p-1"
            {...register("valor_producto", { required: true })}
          />
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
