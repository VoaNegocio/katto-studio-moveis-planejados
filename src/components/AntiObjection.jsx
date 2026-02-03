
const AntiObjection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-12 items-center">

                        {/* Left: Who it's NOT for */}
                        <div className="flex-1 space-y-4 text-center md:text-left">
                            <h3 className="font-serif text-xl md:text-2xl text-gray-900 font-bold">
                                O Studio Katto <span className="text-red-500">não é</span> para quem:
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center gap-3 justify-center md:justify-start">
                                    <span className="text-red-400">✕</span> Busca apenas o menor preço
                                </li>
                                <li className="flex items-center gap-3 justify-center md:justify-start">
                                    <span className="text-red-400">✕</span> Quer decidir sem critério técnico
                                </li>
                                <li className="flex items-center gap-3 justify-center md:justify-start">
                                    <span className="text-red-400">✕</span> Aceita atrasos "normais"
                                </li>
                            </ul>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-32 bg-gray-200"></div>

                        {/* Right: Who it IS for */}
                        <div className="flex-1 space-y-4 text-center md:text-left">
                            <h3 className="font-serif text-xl md:text-2xl text-gray-900 font-bold">
                                É para quem <span className="text-katto-green">valoriza</span>:
                            </h3>
                            <ul className="space-y-3 text-gray-800 font-medium">
                                <li className="flex items-center gap-3 justify-center md:justify-start">
                                    <div className="w-5 h-5 rounded-full bg-katto-green flex items-center justify-center text-white text-xs">✓</div>
                                    Prazo cumprido rigorosamente
                                </li>
                                <li className="flex items-center gap-3 justify-center md:justify-start">
                                    <div className="w-5 h-5 rounded-full bg-katto-green flex items-center justify-center text-white text-xs">✓</div>
                                    Acabamento premium de verdade
                                </li>
                                <li className="flex items-center gap-3 justify-center md:justify-start">
                                    <div className="w-5 h-5 rounded-full bg-katto-green flex items-center justify-center text-white text-xs">✓</div>
                                    Tranquilidade até a entrega
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/556198174888?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-katto-green to-katto-green-dark text-white rounded-full font-bold text-lg shadow-lg shadow-katto-green/20 hover:shadow-xl hover:shadow-katto-green/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Solicitar Orçamento</span>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AntiObjection;
