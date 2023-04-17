
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashborad from "./pages/Dashborad";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from './components/Login';
import './font/iran.ttf'
import './App.css'
function App() {
  return (
    <div className='main2'>
      <BrowserRouter> 
     
        <Sidebar />
        <Routes>
          
          <Route path="/" element={<Dashborad />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
       

        </Routes>
       
      </BrowserRouter>
     </div>
  );
}

export default App;
