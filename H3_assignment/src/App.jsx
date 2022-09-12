import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { Navbar } from './Components/Navbar'
import { Landing } from './Pages/Landing'
import { getData } from './Redux/action'

function App() {


  let dispatch=useDispatch()

  const [count,setCount]=useState(0)
  
  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);


  useEffect(()=>{


    dispatch(getData())

   

    
  },[count])

  

 

  

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='blueback'></div>
      <Landing></Landing>
      
    </div>
  )
}

export default App
