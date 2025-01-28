import { Link } from "react-router";

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-zinc-950 text-white'>
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className="hover:text-gray-300">Carona Generation</Link>
                    <div className='flex gap-4'>
                        <Link to="/viagens" className="hover:text-gray-300">Procurar Carona</Link>
                        <a href="#perfil" className="hover:text-gray-300">Perfil</a>
                        <a href="#sair" className="hover:text-gray-300">Sair</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
