import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Confidentiality from './pages/confident/confidentiality';

const App = () => {
  
  return (
    <BrowserRouter >  
    <Routes> 
    <Route path="*" element={<Home />} />
    <Route path="/confidentialité" element={<Confidentiality />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App