
function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
                <div className="container flex justify-between text-lg">
                    <span>Carona Compartilhada</span>
                    <div className='flex gap-4'>
                        <a href="#oferecer-carona" className="hover:text-gray-300">Oferecer Carona</a>
                        <a href="#procurar-carona" className="hover:text-gray-300">Procurar Carona</a>
                        <a href="#minhas-caronas" className="hover:text-gray-300">Minhas Caronas</a>
                        <a href="#perfil" className="hover:text-gray-300">Perfil</a>
                        <a href="#sair" className="hover:text-gray-300">Sair</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
