import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Router>
        {/* <Header /> */}
        
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
