interface PropsCampoBusca {
    valor: string
    aoMudar: (valor: string) => void
}

export const CampoBusca: React.FC<PropsCampoBusca> = ({ valor, aoMudar }) => {
    return (
    <div className="relative mb-8">
        <input
        type="text"
        value={valor}
        onChange={(e) => aoMudar(e.target.value)}
        placeholder="Buscar viagens..."
        className="w-full px-4 py-3 bg-[#27272A] text-[#FAFAFA] rounded-lg border border-[#71717A] focus:border-[#BEF264] focus:outline-none transition-colors pl-10"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717A]">🔍</span>
    </div>
    )
}
