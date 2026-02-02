
import { useState } from 'react';

const SocialProofVisual = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const reviews = [
        { src: "/depoimentos-google/depoimentogoogle-bianka.png", alt: "Depoimento Bianka Berlinck" },
        { src: "/depoimentos-google/depoimentogoogle-renata.png", alt: "Depoimento Renata Ferreira" },
        { src: "/depoimentos-google/depoimentogoogle-jomar.png", alt: "Depoimento Jomar Andrade" },
        { src: "/depoimentos-google/depoimentogoogle-luciana.png", alt: "Depoimento Luciana Santana" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-12">
                    O que dizem nossos <span className="text-katto-green">clientes</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 cursor-zoom-in"
                            onClick={() => setSelectedImage(review)}
                        >
                            <img
                                src={review.src}
                                alt={review.alt}
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="https://wa.me/5561999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-katto-green to-katto-green-dark text-white rounded-full font-bold text-lg shadow-xl shadow-katto-green/30 hover:shadow-2xl hover:shadow-katto-green/50 hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Quero um projeto com essa qualidade
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
                    </a>
                </div>
            </div>

            {/* Modal / Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-opacity"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-katto-gold transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default SocialProofVisual;
