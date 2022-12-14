import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav(){
const [toggle, setToggle] = useState(false)
const handleClick = e=>{
  e.stopPropagation()
  console.log('clicked')
  setToggle(!toggle)
}
  return(
<div onClick={handleClick} className={toggle ? "burgerContainer expanded":"burgerContainer"}>
    <nav onClick={handleClick}>
      <ul>
        <li><NavLink onClick={handleClick} to="/" end>Home</NavLink></li>
        <li><NavLink onClick={handleClick} to="/projects" end>Projects</NavLink></li>
        <li><NavLink onClick={handleClick} to="/resume" end>Resume</NavLink></li>
      </ul>
    </nav>
    </div>
  )
}