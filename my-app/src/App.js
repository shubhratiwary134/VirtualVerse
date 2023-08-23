
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './Navbar';
import Hero from './Hero';
import HeroData from './HeroData';
import UpComing from './UpComing';




function App() {
  return (
    
    <BrowserRouter>
     <Navbar  />
     <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='toprated' element={<HeroData/>}/>
      <Route path='upcoming' element={<UpComing/>}/>
     </Routes>
    
    </BrowserRouter>
    
    
    
  );
}

export default App;
