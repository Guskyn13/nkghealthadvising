import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>


      <Footer /> 
    </div>
  );
}

export default App;
