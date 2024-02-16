import { useState ,useEffect } from 'react'
import Login from './Component/Login'
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import Actor from './Component/Actor';


function App() {
const [darkmode , setDarkmode] = useState(true)

const switchmode =() => {
  setDarkmode(!darkmode)
}
useEffect(() => {
  if(darkmode){
    localStorage.setItem("darkmode" , "true")
    window.document.documentElement.classList.add("dark")
  }else if (darkmode ===false){
    localStorage.setItem("darkmode" , "false")
    window.document.documentElement.classList.remove("dark")
  }else {
    setDarkmode(localStorage.getItem("darkmode")=== "true")
  }
}, [darkmode])

  return (
    <>

       {!darkmode && <MdDarkMode onClick={switchmode} className="w-10 h-10 fixed top-5 right-10"/>}
       {darkmode && <IoMdSunny onClick={switchmode} className="w-10 h-10 fixed top-5 right-10 text-white" />}
     <Login />
     
    </>
  )
  }

export default App
