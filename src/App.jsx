import { useRef } from "react";
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const contactRef = useRef(null); // ✅ Create ref here

  return (
    <div className="App">
      {/* Pass scroll function down to NavBar */}
      <NavBar scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })} />
      <Banner />
      <Skills />
      <Projects />
      <Contact ref={contactRef} /> {/* ✅ Forward the ref correctly */}
      <Footer />
    </div>
  );
}

export default App;
