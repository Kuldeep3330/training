import logo from './logo.svg';
import './App.css';
import Navbar from './Routing/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routing/Home';
import Dashboard from './Routing/Dashboard';
import About from './Routing/About';
import Payment from './Routing/Payment';
import Main from './Routing/Main';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/main' element={<Main/>}/>
        </Routes>
      </Router>
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/main' element={<Main/>}/>

      </Routes>
      </BrowserRouter> */}

      
      
    </div>
  );
}

export default App;
