import IconHTML from "./SVG/IconHTML";
import IconReact from "./SVG/IconReact";
import IconCSS from "./SVG/IconCSS";
import IconJS from "./SVG/IconJS";
import IconPython from "./SVG/IconPython";
import IconPSQL from "./SVG/IconPSQL";
import IconSequelize from "./SVG/IconSequelize";
import IconDjango from "./SVG/IconDjango";
import IconEmail from "./SVG/IconEmail";
import IconGithub from "./SVG/IconGithub";
import IconLinkedIn from "./SVG/IconLinkedIn";
import PFP from "../assets/pfp.jpg"
import Nav from "./Nav";

export default function Header() {
  return (
    <>
    <header>
    
        <Nav/>
      
      <div className="imgAndLinks">
        <img alt="" id="portrait" src={PFP} />
        <div className="socialLinks">
          <a href="https://github.com/linesbydevon" rel="noreferrer" target="_blank">
            <IconGithub />
          </a>
          <a href="https://www.linkedin.com/in/linesbydevon/" rel="noreferrer" target="_blank">
            <IconLinkedIn/>
          </a>
          <a href="mailto:linesbydevon@gmail.com" rel="noreferrer" target="_blank">
            <IconEmail/>
          </a>
        </div>
      </div>
      <div className="info">
        <h1>Devon Jones</h1>
        <div className="mission">
          <p>
          Design-minded Software Engineer who values creativity and experimentation. Motivated to create experiences that are as impactful and fun as they are sophisticated and intuitive. I prioritize the user experience at each step of the development process and dedicate myself to leveraging new technologies to actualize the vision.
          </p>
        </div>
      </div>
     
    </header>
    <div className="skillIcons">
    <IconHTML />
    <IconReact />
    <IconCSS />
    <IconJS />
    <IconPython />
    <IconPSQL />
    <IconSequelize/>
    <IconDjango/>
    </div>
  </>
  );
}
