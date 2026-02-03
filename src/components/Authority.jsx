
const Authority = () => {
    return (
        <section className="py-20 md:py-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <div className="space-y-6">
                    <p className="font-serif text-xl md:text-2xl text-gray-500">
                        O maior problema dos móveis planejados não é o design.
                    </p>
                    <p className="font-serif text-xl md:text-2xl text-gray-800 font-medium">
                        É atraso, falta de comunicação e promessas vagas.
                    </p>
                    <div className="w-16 h-1 bg-katto-green mx-auto my-8 rounded-full"></div>
                    <p className="font-sans text-lg md:text-xl text-gray-600">
                        Aqui, o processo é claro <strong className="text-katto-green">antes</strong> da produção começar.
                    </p>
                    <div className="pt-4">
                        <a
                            href="https://wa.me/556198174888?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-katto-green to-katto-green-dark text-white rounded-full font-bold text-lg shadow-lg shadow-katto-green/20 hover:shadow-xl hover:shadow-katto-green/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Agendar Reunião</span>
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;
