
import './App.css';
import Navv from './components/Navv';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import SignUp from './components/SignUp';
import Home from './components/Home';
import About from './components/About';
import Booking from './components/Booking';
function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Navv/>
    
    <Routes>
      <Route element={<PrivateComponent/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Booking' element={<Booking/>}/>

      </Route>
      <Route path="/Login" element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    
    </div>
  
  );
}

export default App;
