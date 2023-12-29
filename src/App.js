
import './App.css';
import Education from './Components/Education/Education';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Experienc from './Components/experience/Experienc';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/services/Services';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experienc />
      <Services />
      <Portfolio />
      <Education />
      <statusbar />
     
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
