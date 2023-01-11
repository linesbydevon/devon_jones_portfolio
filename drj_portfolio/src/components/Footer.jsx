import IconEmail from "./SVG/IconEmail";
import IconGithub from "./SVG/IconGithub";
import IconLinkedIn from "./SVG/IconLinkedIn";
import {NavLink} from 'react-router-dom';

export default function Footer(){
  return(
    <footer>
      <div className="footerSocial">
      <a href="https://github.com/linesbydevon" rel="noreferrer" target="_blank">
            <IconGithub />
          </a>
          <a href="https://www.linkedin.com/in/devondevs/" rel="noreferrer" target="_blank">
            <IconLinkedIn/>
          </a>
          <a href="mailto:linesbydevon@gmail.com" rel="noreferrer" target="_blank">
            <IconEmail/>
          </a>
      </div>
      <nav className="footerNav">
        <ul>
          <li><NavLink to="" end>Home</NavLink></li>
          <li><NavLink to="/projects" end>Projects</NavLink></li>
          <li><NavLink to="/resume" end>Resume</NavLink></li>
        </ul>
      </nav>
    </footer>
  )
}