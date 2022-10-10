import './App.css';
import Home from './Home';
import EnteryPoint from './EnteryPoint';
import ExitPoint from './ExitPoint';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Home/>
    <div>
    <Routes>
          <Route path='EnteryPoint' element={<EnteryPoint/>} />
          <Route path="ExitPoint" element={<ExitPoint />} />
    </Routes>
    </div>
    
    </>
  );
}

export default App;
