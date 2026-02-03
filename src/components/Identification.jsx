
const Identification = () => {
    return (
        <section id="sobre" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-katto-green-dark/20 via-gray-900 to-gray-900"></div>
            <div className="max-w-7xl mx-auto px-4 relative">

                {/* Desktop Layout: Deep Overlap Design */}
                <div className="flex flex-col lg:block relative">

                    {/* Image Layer (Background/Right on Desktop) */}
                    <div className="relative w-full lg:w-[65%] lg:ml-auto aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gray-900/20 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0" />
                        <img
                            src="/imgs/img-section2.JPEG"
                            alt="Ambiente planejado Studio Katto"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Layer (Floating Card on Desktop) */}
                    <div className="relative mt-[-40px] lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:w-[45%] z-20">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 relative">
                            {/* Decorative line */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-katto-green to-katto-gold rounded-t-2xl"></div>

                            {/* Label */}
                            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-widest text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-katto-green"></span>
                                Para quem é este serviço?
                            </div>

                            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-tight mb-6">
                                Se você acabou de <span className="text-katto-green font-medium">comprar um imóvel</span> ou está organizando seu novo lar...
                            </h2>

                            <p className="font-sans text-gray-600 text-lg leading-relaxed border-l-4 border-katto-gold/50 pl-6 mb-2">
                                ...e precisa de <span className="font-bold text-gray-800">prazo confiável</span>, qualidade visível e acompanhamento profissional.
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                <a
                                    href="https://wa.me/556198174888?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-katto-green to-katto-green-dark text-white rounded-full font-bold text-base shadow-lg shadow-katto-green/20 hover:shadow-xl hover:shadow-katto-green/40 hover:scale-105 transition-all duration-300 overflow-hidden order-2 md:order-1"
                                >
                                    <span className="relative z-10 w-full text-center">Falar com Especialista</span>
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
                                </a>
                                <div className="flex flex-col items-center md:items-end order-1 md:order-2">
                                    <span className="text-katto-green font-bold text-lg tracking-tight">Studio Katto</span>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Design & Performance</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Identification;
