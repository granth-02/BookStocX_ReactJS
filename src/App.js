import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      
        <Routes>
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
