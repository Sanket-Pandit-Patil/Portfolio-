import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Achievements />
      </main>
      <Contact />

      {/* Subtle Grid Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none opacity-[0.15]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-brand-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,#000_100%)]" />
      </div>
    </div>
  );
}

export default App;
