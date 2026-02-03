import Header from './components/Header';
import Hero from './components/Hero';
import Identification from './components/Identification';
import Authority from './components/Authority';
import Differentials from './components/Differentials';
import FeaturedTestimonial from './components/FeaturedTestimonial';
import AntiObjection from './components/AntiObjection';
import CTASection from './components/CTASection';
import SocialProofVisual from './components/SocialProofVisual';
import Footer from './components/Footer';

import Gallery from './components/Gallery';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Identification />
        <Authority />
        <Differentials />
        <Gallery />
        <FeaturedTestimonial />
        <AntiObjection />
        <CTASection />
        <SocialProofVisual />

      </main>
      <Footer />
    </div>
  );
}

export default App;
