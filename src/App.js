import { HomePage } from './pages/HomePage'
import { Menu } from './components/Menu'
import { DriftPage } from './pages/DriftPage'
import { TimeAttackPage } from './pages/TimeAttackPage'
import { ForzaPage } from './pages/ForzaPage'
import './App.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div>
        <Menu/>
        <div className="page">
          <Routes>
            <Route path="/" element={ <HomePage/>} />
            <Route path="/drift" element={<DriftPage/>} />
            <Route path="/timeattack" element={<TimeAttackPage/>} />
            <Route path="/forza" element={<ForzaPage/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
