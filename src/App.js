import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import Dashboard from './Components/Dashboard';
import List from './Components/List';
import {useState,useEffect} from 'react'
function App() {

const [data,setData]= useState([])

  useEffect(()=>{
    fetch('list.json')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data);
        setData(data)
    })
},[])

 


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/list' element={<List data={data}></List>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
