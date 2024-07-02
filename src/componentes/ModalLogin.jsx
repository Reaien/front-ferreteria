import React from "react";
import logo1 from "../assets/images/logo2.png";

function ModalLogin({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ${
        open ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-12 w-80 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-teal-500/80 hover:text-teal-600 font-bold text-3xl"
        >
          &times;
        </button>
        <div className="flex justify-center mb-4">
          <img src={logo1} alt="Logo" className="w-20 h-20" />
        </div>
        <h2 className="text-center text2xl font-bold mb-4">Inicio de Sesión</h2>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tu email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="aaa@aaa.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tu contraseña
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              required
            />
          </div>

          <div className="flex items-start mb-5">
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              No tienes cuenta?{" "}
              <a
                href="#"
                className="text-teal-600 hover:text-teal-800 hover:underline"
              >
                Registrate
              </a>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="text-white focus:outline-none font-medium r text-sm px-5 py-2.5 text-center bg-teal-500/80 hover:bg-teal-600 transition-all duration-500 flex w-full justify-center rounded-md"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalLogin;
