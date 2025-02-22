import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Footer/>

        <Routes>
            <Route path='/about'  element={<About/>}/>
            <Route path='/projects'  element={<Projects/>}/>
            <Route path='/services'  element={<Services/>}/>
            <Route path='/'  element={<Home/>}/>
        </Routes>

      </Router> 
    </div>
  );
}

export default App;
