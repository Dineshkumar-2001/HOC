import logo from './logo.svg';
import './App.css';
import {  Route, Routes,Router } from "react-router-dom";
import Parent from './Parent';
import Home from './Home';
import Child from './Child';
import Call_abck from './Call_abck';
import Test_1 from './Test_1';


function App() {
  return (
    <div className="App">
      {/* <Test_1/> */}
      {/* <Call_abck/> */}
       <Routes>
    
          <Route path='/' element={<Parent/>} />
          <Route path='Home' element={<Home/>}/>
          {/* <Route path='/' element={<Child/>}/>
         <Route path='Parent' element={<Parent/>}/>
         <Route path="Home" element={<Home/>}/> */}
         
       </Routes>
    </div>
  );
}

export default App;
