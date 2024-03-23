import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import  Home from './components/pages/Home';
import Client from './components/pages/Client';
import Productos from './components/pages/Productos';
import { useState } from 'react';
import Carrito from './components/pages/Carrito';


function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  

  return (
    <Router>
        <NavBar setShowMenu={setShowMenu} showMenu={showMenu}/>  
        <div className='flex '>
            <SideBar  showMenu={showMenu}/>
        
            <Routes className='content'>

                    <Route path='/productos' exact={true} Component={Productos}/>
                    <Route path='/' exact={true} Component={Home}/>
                    <Route path='/client' exact={true} Component={Client}/> 
                    <Route path='/carrito' exact={true} Component={Carrito}/> 
                
            </Routes>  
        </div>
        
    </Router>
  );
}

export default App;
