
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
            </div>
        </section>
    );
};

export default AntiObjection;
