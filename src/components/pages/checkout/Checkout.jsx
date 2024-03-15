import { Link } from "react-router-dom";


export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div className="h-full mt-24 text-center">
      {orderId ? (
        <div>
          <h1 className="text-center text-2xl">Gracias por tu compra. Tu numero de orden es: <br /> <span className="text-lime-600">{orderId}</span> </h1>
          <h3 className="text-center text-orange-700">Recuerda guardar tu numero de orden</h3>
          <Link to="/">
          <button className="text-white mt-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Regresar a la Tienda</button>
          </Link>
        </div>
      ) : (
        <form className="w-1/2 m-auto" onSubmit={envioDeFormulario}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Nombre
              </label>
            </div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="name"
              onChange={capturar}
            />
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Telefono
              </label>
            </div>

            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              name="phone"
              onChange={capturar}
            />
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Correo Electronico
              </label>
            </div>

            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="email"
              onChange={capturar}
            />
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-2/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Comprar
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
