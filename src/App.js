import './App.css';
import Header from './components/header/Header'
import AnimatedRoutes from './components/animatedRoutes/AnimatedRoutes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
