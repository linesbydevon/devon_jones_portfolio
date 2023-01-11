import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="copy">
        <h2>My story</h2>

        <p>
          I'm a lifelong creative who first developed an interest in web design
          as a teenager when I had an active role in developing the brand of my
          multiple music projects. These projects introduced me to design
          software like Photoshop and technology like HTML and CSS that enabled
          me to customize Myspace pages.
        </p>
        <p>
          Despite finding design and development to be as enjoyable as
          songwriting and performing, I dismissed the possibility that I could
          pursue them as a career. After a five year career in
          social services, however, I revisited this interest and taught myself
          HTML, CSS, and JavaScript.
        </p>
        <p>
          Shortly thereafter I developed my first{" "}
          <a
            href="https://www.linesbydevon.com"
            target="_blank"
            rel="noreferrer"
          >
            WordPress site
          </a>{" "}
          with a custom theme. I used this modest site to chronicle my creative
          and professional journey. My demonstrated competence, initiative, and
          passion soon landed me my first web design position with EAB and I
          finally had the chance to prove myself as a professional rather than a
          mere hobbyist.
        </p>
      </div>
      <div className="quoteContainer">
        <figure>
          <blockquote>
            <p>
              Devon has effectively replaced two senior web designers and
              carried the full team workload while also mentoring our new
              graphic designer. In addition to that, he has improved the quality
              and timeliness of our email product. His proactivity in monitoring
              this channel has again never been seen in my tenure here.
            </p>
            <p>
              I&rsquo;m not even sure how to express the level of collaboration
              Devon brings to the group. He&rsquo;s continually refining process
              for everyone&rsquo;s benefit and this is echoed in his
              team&rsquo;s feedback of what he brings to the team from his
              flexible attitude, his impressive capacity, and his delightful
              disposition.
            </p>
          </blockquote>
          <div className="captionContainer">
            <figcaption>
              <span>Synthia Bialkowski</span>
              <br />
              EAB Creative Supervisor
            </figcaption>
          </div>
        </figure>
      </div>
      <div className="copy">
        <p>
          In 2022, after nearly four years in the industry as a self-taught web
          designer, I decided to enroll in a software engineering bootcamp with
          General Assembly. As a result of this course, I completed more than
          500 hours of expert lead instruction and gained hands-on experience
          building projects with some of the industry's most in-demand
          technologies.
        </p>
        <p>
          I'm excited to continue my journey in the tech world and am grateful
          to have a career that affords endless opportunities to learn, solve
          problems, be creative, and collaborate with brilliant developers. I
          want to thank you for stopping by my page and I want to invite you to
          check out my recent <Link to="/projects">projects</Link> and{" "}
          <Link to="/resume">resume</Link>.
        </p>
      </div>
    </div>
  );
}
