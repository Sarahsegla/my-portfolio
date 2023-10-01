import './App.css';
import Navbar from './components/navbar/Navbar';
import Jumbo from "./components/jumbo/jumbo";
import About from './components/about/about';
import Carousel from './components/carousel/carousel';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
      
      </header>
      <body>
        
        <Jumbo/>
        <About/>
        <Carousel />
        <Contact />
      </body>
      <Footer />
    </div>
  );
}

export default App;
