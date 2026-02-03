
import { useRef, useState } from 'react';

const FeaturedTestimonial = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section id="depoimentos" className="py-20 bg-gray-900 text-white relative">
            <div className="max-w-5xl mx-auto px-4">
                <div className="rounded-3xl overflow-hidden bg-gray-800 shadow-2xl relative group border border-gray-700">

                    <div className="h-[500px] md:h-auto md:aspect-video relative bg-black">
                        <video
                            ref={videoRef}
                            src="/videos/depoimentos-cliente.mp4"
                            className="w-full h-full object-cover cursor-pointer" // cursor-pointer indicates interactivity
                            controls={isPlaying} // Native controls enabled only when playing
                            playsInline
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onClick={handlePlay} // Allows clicking video to play (if controls are hidden/not capturing click)
                        >
                            Seu navegador não suporta a tag de vídeo.
                        </video>

                        {/* Custom Play Button Overlay - Disappears when playing */}
                        {!isPlaying && (
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group-hover:bg-black/20 transition-all z-30"
                                onClick={handlePlay}
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-katto-gold/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        )}

                        {!isPlaying && (
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none flex flex-col justify-end min-h-[60%] md:min-h-[50%] z-20">
                                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-katto-gold/10 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-20 h-20 md:w-32 md:h-32 transform rotate-180">
                                        <path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.035 14.929 15.418C15.539 14.801 16.494 14.492 17.794 14.492L18.665 14.492L18.665 8.16901L17.589 8.16901C16.291 8.16901 15.377 8.52901 14.847 9.24801C14.394 9.87301 14.127 10.749 14.045 11.876L11.391 11.876C11.455 10.279 11.801 8.87701 12.43 7.67101C13.208 6.17701 14.774 5.37101 17.589 5.37101L22.006 5.37101L22.006 14.825H18.914C18.604 14.825 18.257 14.88 17.873 14.991C17.489 15.101 17.297 15.467 17.297 16.089V21L14.017 21ZM5.00604 21L5.00604 18C5.00604 16.896 5.30904 16.035 5.91704 15.418C6.52704 14.801 7.48204 14.492 8.78204 14.492L9.65304 14.492L9.65304 8.16901L8.57704 8.16901C7.28004 8.16901 6.36504 8.52901 5.83504 9.24801C5.38204 9.87301 5.11504 10.749 5.03304 11.876L2.37904 11.876C2.44304 10.279 2.78904 8.87701 3.41804 7.67101C4.19504 6.17701 5.76204 5.37101 8.57704 5.37101L12.994 5.37101L12.994 14.825H9.90204C9.59204 14.825 9.24504 14.88 8.86104 14.991C8.47704 15.101 8.28504 15.467 8.28504 16.089V21L5.00604 21Z" />
                                    </svg>
                                </div>
                                <div className="relative z-10 max-w-3xl">
                                    <div className="w-8 h-1 md:w-12 bg-katto-gold mb-4 md:mb-6"></div>
                                    <p className="font-serif italic text-xl md:text-3xl lg:text-5xl mb-4 md:mb-6 text-white leading-tight drop-shadow-md">
                                        "Eles entregaram antes do prazo e o acabamento ficou impecável."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-katto-green/20 p-1.5 md:p-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-katto-green">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-base md:text-lg">Denis e Thassya</p>
                                            <p className="text-gray-400 text-xs md:text-sm tracking-wide uppercase">Clientes • Brasília - DF</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/556198174888?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-katto-green to-katto-green-dark text-white rounded-full font-bold text-lg shadow-lg shadow-katto-green/20 hover:shadow-xl hover:shadow-katto-green/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Ver Mais Resultados</span>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTestimonial;
