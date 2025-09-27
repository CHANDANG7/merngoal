import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashBoard from './pages/dashBoard';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/header';
function App() {
  return (
    <>
    
     <Router>
      <div className="Container">
        <Header></Header>
        <Routes>
          <Route path='/' element={<DashBoard></DashBoard>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
     </Router>
      
    </>
    
  );
}

export default App;
