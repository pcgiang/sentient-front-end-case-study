import './index.css';
import LandingPage from './screens/landing/LandingPage';
import { BrowerRouter, Routes, Route } from 'react-router-dom';
import NLP from './screens/pages/NLP';
import Voice from './screens/pages/Voice'
import Data from './screens/pages/Data'
import CV from './screens/pages/CV'
import Utility from './screens/pages/Utility'
import NavigationPage from './screens/navigation/NavigationPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/nav" element={<NavigationPage/>}/>
        <Route path="/nlp" element={<NLP/>}/>
        <Route path="/voice" element={<Voice/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/CV" element={<CV/>}/>
        <Route path="/utility" element={<Utility/>}/>
      </Routes>
    </div>
  );
}

export default App;
