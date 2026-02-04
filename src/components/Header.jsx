
import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Projetos', href: '#projetos' },
        { name: 'Depoimentos', href: '#depoimentos' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gray-900/80 backdrop-blur-md shadow-lg py-2 border-b border-white/5'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logo/logo-katto2.png"
                        alt="Studio Katto Logo"
                        className={`h-16 w-auto object-contain transition-all duration-300`}
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-katto-gold ${isScrolled ? 'text-gray-200' : 'text-gray-900' // Dark text on hero, Light text on scroll
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/556198174888?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-6 py-2.5 bg-gradient-to-r from-katto-green to-katto-green-dark text-white rounded-full font-medium text-sm shadow-lg shadow-katto-green/20 hover:shadow-katto-green/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Falar no WhatsApp</span>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden transition-colors ${isScrolled ? 'text-white' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu - Dark Theme */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-white/10 shadow-xl p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-200 font-medium py-2 px-4 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/556198174888?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20m%C3%B3veis%20planejados."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-center py-3 bg-gradient-to-r from-katto-green to-katto-green-dark text-white rounded-lg font-bold shadow-lg shadow-katto-green/20 overflow-hidden group"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span className="relative z-10">Falar no WhatsApp</span>
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
