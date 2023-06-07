import './App.css';
import Services from './components/Services';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
