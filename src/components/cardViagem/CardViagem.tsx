interface PropsCartaoViagem {
    carregando: boolean
}

export const CardViagem: React.FC<PropsCartaoViagem> = ({ carregando }) => {
    return (
    <div className="w-full p-4 mb-4 bg-[#27272A] rounded-lg border border-[#71717A] hover:border-[#BEF264] transition-colors">
        {carregando ? (
        <div className="h-32 animate-pulse bg-[#18181B]" />
        ) : (
        <div className="space-y-2">
            <h3 className="text-[#FAFAFA] text-xl font-semibold">Título da Viagem</h3>
            <p className="text-[#D4D4D8]">Descrição da viagem...</p>
            <div className="flex justify-between items-center">
            <span className="text-[#BEF264]">R$ 999</span>
            <button className="px-4 py-2 bg-[#BEF264] text-[#1A2E05] rounded-md hover:bg-[#1A2E05] hover:text-[#BEF264] transition-colors">
                Ver Detalhes →
            </button>
            </div>
        </div>
        )}
    </div>
    )
}