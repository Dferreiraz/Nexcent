import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Clients } from './components/Clients/Clients';
import { Community } from './components/Community/Community';
import { SplitSection } from './components/SplitSection/SplitSection';
import { Stats } from './components/Stats/Stats';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Blog } from './components/Blog/Blog';
import { CTA } from './components/CTA/CTA';
import { Footer } from './components/Footer/Footer';
import rafiki from './assets/images/rafiki.svg';
import pana from './assets/images/pana.svg';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Community />
      <SplitSection 
        imageSrc={rafiki} 
        imageAlt="Illustration" 
        title="The unseen of spending three years at Pixelgrade" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta." 
      />
      <Stats />
      <SplitSection 
        imageSrc={pana} 
        imageAlt="Mobile Illustration" 
        title="How to design your site footer like we did" 
        text="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt aliquam, lectus lacus consequat erat, nec elementum libero ex at ex. Donec vestibulum pulvinar ex ac cursus." 
        reversed={true}
      />
      <Testimonial />
      <Blog />
      <CTA />
      <Footer />
    </>
  );
}

export default App;