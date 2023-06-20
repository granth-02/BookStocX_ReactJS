import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Library from './Components/Library';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Home />
        <Routes>
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/library' element={<Library/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
