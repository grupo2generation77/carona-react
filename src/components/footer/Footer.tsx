

function Footer() {

    let data = new Date().getFullYear()

    return (
        <footer className="bg-zinc-950 text-white py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
              <p className="text-sm">
                Somos uma plataforma de carona compartilhada que conecta pessoas para viagens mais sustentáveis, econômicas e sociais.
              </p>
            </div>
    
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li>Email: <a href="mailto:contato@caronacompartilhada.com" className="text-blue-400 hover:underline">contato@caronageneration.com</a></li>
              </ul>
            </div>
    
            
          </div>
    
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
            <p>© {data} Carona Compartilhada. Todos os direitos reservados.</p>
          </div>
        </footer>
      );
    }
export default Footer