import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Howitworks from "./components/Howitworks";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Howitworks />
      <Contact />
      <Footer />
    </div>
  );
}
