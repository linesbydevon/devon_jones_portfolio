import Project from './Projects/Project';
import TicTacToeSS from '../ProjectScreenShots/TicTacToeSS.jpg'
import LamboWhenSS from '../ProjectScreenShots/LamboWhenSS.jpg'
import JugrKnotSS from '../ProjectScreenShots/JugrKnotSS.jpg'

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <Project title="LamboWhen?"
                githubURL="https://github.com/linesbydevon/LamboWhen"
                deployedURL="https://lambowhen.netlify.app/"
                image={LamboWhenSS}
                alt="Screenshot of LamboWhen app">
                  LamboWhen? is a React.js app that leverages Coinranking API to display information about the crypto investments of users.
      </Project>
      <Project title="JUGR-KNOT"
                githubURL="https://github.com/linesbydevon/knightsTour"
                deployedURL="https://jugr-knot.surge.sh/"
                image={JugrKnotSS}
                alt="Screenshot of JUGR-KNOT app">
                  JUGR-KNOT is a strategy game based on the chess concept of a Knight's Tour. Built with HTML, CSS, and JS.
      </Project>
      <Project title="Tic-Tac-Toe"
                githubURL="https://github.com/linesbydevon/knightsTour"
                deployedURL="https://jugr-knot.surge.sh/"
                image={TicTacToeSS}
                alt="Screenshot of Tic-Tac-Toe app">
                  This Tic-Tac-Toe game was built with a weekend with HTML, CSS animations, and JavaScript.
      </Project>
     
    </section>
  );
}
