import Project from './Projects/Project';
import TicTacToeSS from '../ProjectScreenShots/TicTacToeSS.jpg'
import LamboWhenSS from '../ProjectScreenShots/LamboWhenSS.jpg'
import JugrKnotSS from '../ProjectScreenShots/JugrKnotSS.jpg'
import dr0p1n from '../ProjectScreenShots/dr0p1n.png'
import DropinSS from '../ProjectScreenShots/DropinSS.jpg'

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <Project title="DR0P1N"
                githubURL="https://github.com/linesbydevon/dr0p1n_front"
                deployedURL="https://preeminent-capybara-6970eb.netlify.app"
                image={DropinSS}
                alt="Screenshot of LamboWhen app">
                  DR0P1N is a fullstack app that leverages React.js, Django, and Mapbox.js to enable users to find and share skate spots in the Richmond metro area.
      </Project>
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
                githubURL={false}
                deployedURL="https://tictactoedevon.surge.sh/"
                image={TicTacToeSS}
                alt="Screenshot of Tic-Tac-Toe app">
                  I built this simple but fun Tic-Tac-Toe game in a weekend with HTML, CSS animations, and JavaScript.
      </Project>
     
    </section>
  );
}
