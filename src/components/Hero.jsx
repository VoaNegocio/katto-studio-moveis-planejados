
const Hero = () => {
    const HeroImage = ({ className = "" }) => (
        <div className={`relative w-full ${className}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10" />
                {/* Fallback image before generating specific one */}
                <img
                    src="/imgs/fotoherostudiokatto.webp"
                    alt="Cozinha Planejada Studio Katto"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Float Badge */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 animate-float">
                    <div className="bg-katto-green/10 p-2 rounded-full text-katto-green">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Entrega</p>
                        <p className="text-sm font-bold text-gray-900">40 Dias Úteis</p>
                    </div>
                </div>
            </div>

            {/* Outline Decor */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-katto-gold/30 rounded-2xl -z-10" />
        </div>
    );

    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-katto-gold/10 -skew-x-12 translate-x-1/2 rounded-l-3xl z-0" />
            <div className="absolute top-20 left-10 w-64 h-64 bg-katto-green/5 rounded-full blur-3xl z-0" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content Block */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-8 tracking-tight">
                            Cozinha Planejada de <span className="text-katto-green">Alto Padrão</span> em Brasília, com Entrega em até <span className="relative whitespace-nowrap"><span className="relative z-10">30 Dias Úteis</span><span className="absolute bottom-1 left-0 right-0 h-3 bg-katto-gold/40 -rotate-1 z-0"></span></span>
                        </h1>

                        {/* Mobile Image Position (Between H1 and P) */}
                        <HeroImage className="lg:hidden mb-12 max-w-md mx-auto" />

                        <p className="font-sans text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Para quem não quer esperar meses nem correr riscos em um projeto de alto valor. Projetos sob medida com acabamento premium e pagamento facilitado em até 18x.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="https://wa.me/556198174888?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 bg-gradient-to-r from-katto-green to-katto-green-dark text-white rounded-full font-bold text-lg shadow-xl shadow-katto-green/30 hover:shadow-2xl hover:shadow-katto-green/50 hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Solicitar Orçamento
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                                {/* Premium Shine Effect */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
                            </a>

                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-katto-gold">
                                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 12c0 5.082 2.923 9.4 7.208 11.558a.75.75 0 00.67 0c4.285-2.158 7.208-6.476 7.208-11.558a12.74 12.74 0 00-.685-6.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zM12 4.801a9.72 9.72 0 014.503 1.936 11.242 11.242 0 01-1.353 9.423.75.75 0 101.27.754 12.742 12.742 0 001.077-9.563l.36-.08A11.24 11.24 0 0118.9 12c0 4.152-2.166 7.823-5.5 9.923C10.066 19.823 7.9 16.152 7.9 12a11.24 11.24 0 012.394-6.85.75.75 0 10-1.188-.93A12.74 12.74 0 007.5 12c0 5.082 2.923 9.4 7.208 11.558.26-.131.517-.269.77-.412a11.238 11.238 0 012.522-8.345z" clipRule="evenodd" />
                                </svg>
                                Garantia de Entrega
                            </div>
                        </div>
                    </div>

                    {/* Desktop Image Position (Right Side) */}
                    <div className="flex-1 hidden lg:block">
                        <HeroImage />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
