import { useState, useEffect } from 'react';

const Identification = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!isModalOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') setCurrentSlide((prev) => (prev === 0 ? 9 : prev - 1));
            if (e.key === 'ArrowRight') setCurrentSlide((prev) => (prev + 1) % 10);
            if (e.key === 'Escape') setIsModalOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    // Auto-advance carousel
    useEffect(() => {
        if (isModalOpen) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 10);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(timer);
    }, [isModalOpen]);
    return (
        <section id="sobre" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-katto-green-dark/20 via-gray-900 to-gray-900"></div>
            <div className="max-w-7xl mx-auto px-4 relative">

                {/* Desktop Layout: Deep Overlap Design */}
                <div className="flex flex-col lg:block relative">

                    {/* Image Layer (Carousel) */}
                    <div className="relative w-full lg:w-[65%] lg:ml-auto aspect-[4/3] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-gray-900/20 mix-blend-multiply z-10 pointer-events-none" />

                        {/* Carousel Images */}
                        {Array.from({ length: 10 }).map((_, index) => (
                            <img
                                key={index}
                                src={`/imgs/carrossel-section2/img${index + 1}-carrossel.JPEG`}
                                alt={`Ambiente planejado ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out cursor-pointer ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                                onClick={() => setIsModalOpen(true)}
                            />
                        ))}

                        {/* Navigation Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                        ? 'bg-white w-6'
                                        : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                    aria-label={`Ir para imagem ${index + 1}`}
                                />
                            ))}
                        </div>
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

            {/* Lightbox Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white hover:text-katto-gold transition-all duration-300 p-2 hover:scale-110 active:scale-95 z-50 bg-black/20 rounded-full backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12 shadow-lg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous Button */}
                    <button
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-katto-green transition-all duration-300 p-4 bg-black/30 hover:bg-black/80 rounded-full hover:scale-110 active:scale-95 backdrop-blur-sm z-50 group border border-white/10"
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlide((prev) => (prev === 0 ? 9 : prev - 1));
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg group-hover:-translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-katto-green transition-all duration-300 p-4 bg-black/30 hover:bg-black/80 rounded-full hover:scale-110 active:scale-95 backdrop-blur-sm z-50 group border border-white/10"
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlide((prev) => (prev + 1) % 10);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    <div
                        className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={`/imgs/carrossel-section2/img${currentSlide + 1}-carrossel.JPEG`}
                            alt={`Ambiente planejado ${currentSlide + 1}`}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fadeIn"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-2 rounded-full text-white font-medium backdrop-blur-md shadow-lg border border-white/10">
                            {currentSlide + 1} / 10
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Identification;
