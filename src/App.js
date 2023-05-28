import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    document.title = 'LIVE-BALL';
  }, []);

  return (

    <div className="App">
      <NavBar/>
      <MainSection/>
      <Footer/>

    </div>
  );
}

export default App;
