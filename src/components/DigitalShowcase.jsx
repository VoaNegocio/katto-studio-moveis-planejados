
const DigitalShowcase = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">
                    Seu projeto em <span className="text-katto-green">detalhes</span>
                </h2>

                {/* Notebook Mockup */}
                <div className="relative mx-auto max-w-4xl">
                    {/* Simple CSS Laptop */}
                    <div className="relative mx-auto bg-gray-800 rounded-t-xl border-[8px] border-gray-800 h-[300px] md:h-[450px] w-full max-w-[700px] shadow-2xl">
                        <div className="bg-white w-full h-full rounded-lg overflow-hidden relative">
                            {/* Screen Content - Dashboard/Project View */}
                            <img
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
                                alt="Projeto 3D na tela"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-white/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <p className="mt-3 font-mono text-sm text-gray-600">Renderização 3D - Apt. 402</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Keyboard base */}
                    <div className="relative mx-auto bg-gray-900 rounded-b-xl h-[24px] max-w-[800px] w-full shadow-xl"></div>
                </div>
            </div>
        </section>
    );
};

export default DigitalShowcase;
