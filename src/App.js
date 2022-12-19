
import './App.css';
import NavBar from './components/NavBar.js';
import Header  from './components/Header';
import Moviles from './components/Moviles';
import Tablets from './components/Tablets';
import Accesorios from './components/Accesorios';
import Footer from './components/Footer';

function App() {
  return (<div>
    <NavBar />
    <Header />
    <Moviles />
    <Tablets />
    <Accesorios/>
    <Footer />
  </div>
  );
}

export default App;
