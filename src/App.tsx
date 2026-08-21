import { UtilityBar } from '@/components/UtilityBar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { CityLanding } from '@/components/CityLanding';
import { HowItWorks } from '@/components/HowItWorks';
import { Branch } from '@/components/Branch';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <UtilityBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <CityLanding />
        <HowItWorks />
        <Branch />
        <Gallery />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
