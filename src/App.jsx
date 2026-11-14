import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
    <div className="relative font-sans text-slate-100 grid-bg overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-neon/30 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-neon2/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[26rem] h-[26rem] rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <div id="about" className="scroll-mt-24">
        <Reveal><About /></Reveal>
      </div>
      <div id="skills" className="scroll-mt-24">
        <Reveal><Skills /></Reveal>
      </div>
      <div id="experience" className="scroll-mt-24">
        <Reveal><Experience /></Reveal>
      </div>
      <div id="certifications" className="scroll-mt-24">
        <Reveal><Certifications /></Reveal>
      </div>
      <div id="contact" className="scroll-mt-24">
        <Reveal><Contact /></Reveal>
      </div>
      <Footer />
    </div>
  );
}

export default App;