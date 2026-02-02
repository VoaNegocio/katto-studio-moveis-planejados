
const Gallery = () => {
    // Using placeholder images for now
    const projects = [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2674&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2674&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2674&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=2674&auto=format&fit=crop"
    ];

    return (
        <section id="projetos" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-gray-900">
                    Nossos Projetos <span className="text-katto-green">Recentes</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    {projects.map((src, index) => (
                        <div key={index} className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
                            <img
                                src={src}
                                alt={`Projeto ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
