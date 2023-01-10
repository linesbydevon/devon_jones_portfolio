import Button from "../../Button"
export default function Project({title, image, alt, children, githubURL, deployedURL}){
  return(
    <div className="gradientBorder projectContainer">
        <div className="project">
          <div className="projectInfo">
            <h3>{title}</h3>
            <p>
              {children}
            </p>
            <div className="buttons">
              <Button url={deployedURL}>Deployed</Button>
              {githubURL && <Button url={githubURL}>Github</Button>}
              
            </div>
          </div>
          <div className="thumbnailContainer">
            <a href={deployedURL} target="_blank" rel="noreferrer">
            <img src={image} alt={alt}/>
            </a>
          </div>
        </div>
      </div>
  )
}