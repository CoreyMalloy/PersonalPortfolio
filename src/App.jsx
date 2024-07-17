import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}><Redirect to="/" /></Route>
        <Route path='/about' element={<About/>}><Redirect to="/" /></Route>
        <Route path='/projects' element={<Projects/>}><Redirect to="/" /></Route>
        <Route path='/contact' element={<Contact/>}><Redirect to="/" /></Route>
      </Routes>
    </div>
  );
}

export default App;