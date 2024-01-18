import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import connexion from '../src/connect/connexion';
import inscription from '../src/connect/inscription'
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<connexion />}></Route>
          <Route path="/inscription" element={<inscription />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
