
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-6">
                <img src="/logo/logo-katto.png" alt="Studio Katto" className="h-10 w-auto opacity-80 grayscale hover:grayscale-0 transition-all cursor-pointer" />

                <p className="text-sm md:text-base max-w-md mx-auto">
                    Móveis Planejados em Brasília. Especialistas em cozinhas sob medida.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    <span className="flex items-center gap-1"><span className="text-katto-gold">★</span> 20+ Avaliações 5 Estrelas</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Prazo Respeitado</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Atendimento Elogiado</span>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 w-full text-xs text-gray-600">
                    &copy; {currentYear} Studio Katto Planejados. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
