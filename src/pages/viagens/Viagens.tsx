import { useState } from "react"
import { CardViagem } from "../../components/cardViagem/CardViagem"
import { CampoBusca } from "../../components/campoBusca/CampoBusca"

function Viagens() {
    const [termoBusca, setTermoBusca] = useState<string>("")
    const [carregando] = useState<boolean>(true)

    return (
    <div className="min-h-screen bg-[#09090B] p-6">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-[#FAFAFA] mb-8">Viagens Disponíveis</h1>

            <CampoBusca valor={termoBusca} aoMudar={setTermoBusca} />

            <div className="space-y-4">
                {[1, 2, 3].map((indice) => (
                <CardViagem key={indice} carregando={carregando} />
            ))}
            </div>
        </div>
    </div>
    )
}

export default Viagens