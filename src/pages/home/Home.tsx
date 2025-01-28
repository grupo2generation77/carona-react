import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="bg-zinc-800 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl text-lime-300 font-bold">CARONA 77</h2>
            <p className="text-xl text-lime-400 mb-10">
              Conheça o mundo com companhia
            </p>
            <div>
              <Link
                to="/
                "
                className="px-6 py-3 bg-lime-600 text-zinc-800 font-medium rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-lime-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-200 focus:ring-offset-2 "
              >
                FAÇA UM TESTE AGORA
              </Link>
            </div>
            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4"></div>
            </div>
          </div>

          <div className="flex justify-center items-center min-h-screen">
            <img
              src="src\assets\Polegar.png"
              alt="Imagem Página Home"
              className="w-2/3 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl shadow-lime-200 rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
