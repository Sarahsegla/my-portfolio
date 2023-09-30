import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/about';
import Jumbo from "./components/jumbo/jumbo";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
      
      </header>
      <body>
        
        <Jumbo/>
        <About/>
      </body>
    </div>
  );
}

export default App;
