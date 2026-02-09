
const Differentials = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Prazo que reduz ansiedade",
            description: "Entrega em até 40 dias úteis, com cronograma definido e compromisso real com o prazo."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
            ),
            title: "Viabilidade sem desvalorizar",
            description: "Pagamento facilitado em até 18x no cartão, pensado para tickets altos e planejamento financeiro."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
            ),
            title: "Prova social objetiva",
            description: "Mais de 20 avaliações 5 estrelas no Google, além de depoimentos gravados de clientes reais."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            ),
            title: "Atendimento humanizado",
            description: "Você não fala com \"etapas\". Fala com pessoas que acompanham seu projeto do início à entrega."
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-katto-green-dark/10 via-gray-900 to-gray-900"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-katto-green group-hover:border-katto-green/50 group-hover:bg-gray-800/80 transition-all duration-300 shadow-lg shadow-black/20">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-katto-green transition-colors">{feature.title}</h3>
                                <p className="font-sans text-gray-400 leading-relaxed max-w-sm border-l-2 border-transparent pl-0 group-hover:border-katto-green/30 group-hover:pl-4 transition-all duration-300">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://wa.me/556198174888?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-katto-green to-katto-green-dark text-white rounded-full font-bold text-lg shadow-lg shadow-katto-green/20 hover:shadow-xl hover:shadow-katto-green/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Quero um Projeto Assim</span>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Differentials;
