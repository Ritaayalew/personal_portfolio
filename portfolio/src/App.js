import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Footer/>

        <Routes>
            <Route path='/about'  element={<About/>}/>
            <Route path='/'  element={<Home/>}/>
        </Routes>

      </Router> 
    </div>
  );
}

export default App;
