import React, { useContext } from 'react'
import CustomButton from '../components/CustomButton/CustomButton'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
  const {theme,setTheme} = useContext(ThemeContext);
  console.log("current theme",theme)
  const handleToggle = ()=>{
    setTheme(theme === "light"?"dark":"light");
  }
  return (
    <>
    <p>current theme is {theme}</p>
  <button onClick={handleToggle}>Toggle theme</button>
    </>

  )
}
