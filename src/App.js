import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './view/Main';
import About from './view/About';
import Services from './view/Services';
import Works from './view/Works';
import Testimonials from './view/Testimonials';
import Faq from './view/Faq';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/works" element={<Works />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
