import React from "react";

function Footer() {
  return (
    <footer className="bg-cyan-700 mt-32 p-4 text-center w-full ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex justify-center">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Condiciones servicio
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Recomendaciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cobertura
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">
                Siguenos
              </h2>
              <ul className=" text-white">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Condiciones de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terminos &amp; Condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex  justify-center">
          <span className="text-sm text-white  sm:text-center">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Ferretería
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
