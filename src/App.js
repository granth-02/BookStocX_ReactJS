import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Library from './Components/Library';
import Technology from './Components/Technology';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/library' element={<Library/>} />
          <Route exact path='/technology' element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
