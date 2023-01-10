import Collapsible from "./Resume/Collapsible";
import Button from "../Button";
export default function Resume() {
  return (
    <div id="meat">
      <div className="downloadResume">
        <h2>Want something<br/>printer-friendly?</h2>
        <Button>Download Resume PDF</Button>
      </div>
      <section id="workExp">
        <h2>Relevant Experience</h2>
        <Collapsible
          employer="Capital One"
          role="Web Designer"
          startDate="April 2020"
          endDate="October 2022"
        >
          <li>
            Utilized Sketch and Adobe Creative Suite to develop and optimize
            assets for deployment in external marketing and servicing emails.
          </li>
          <li>
            Developed HTML emails for numerous lines of business by leveraging a
            library of code snippets and coding custom layout elements.
          </li>
          <li>
            Collaborated with project manager, copywriter, and internal partners
            to develop strategy, identify challenges, and deliver effective and
            timely products.
          </li>
          <li>
            Performed technical review of code written by peer designers to
            ensure that projects satisfy the aims of the strategy in addition to
            meeting internal brand, technical, and accessibility standards for
            email development.
          </li>
        </Collapsible>
        <Collapsible
          employer="EAB Advancement Marketing Services"
          role="Web Designer"
          startDate="March 2019"
          endDate="April 2020"
        >
          <li>
            Utilized Adobe Creative Suite to design layouts and visual assets
            for emails, landing pages, and social media display ads.
          </li>
          <li>
            Leveraged knowledge of conversion-centered design, HTML, CSS/SCSS,
            and gulp workflows to develop web pages and emails that were brand
            appropriate, responsive, and assessible.
          </li>
          <li>
            Collaborated with copywriters, print designers, and digital
            marketing specialists to develop campaigns that were effective and
            cohesive.
          </li>
          <li>
            Managed overlapping projects and campaigns to ensure timely
            completion and exceptional quality.
          </li>
        </Collapsible>
        <Collapsible
          employer="Richmond Area Skateboard Alliance (RASA)"
          role="Web Admin (Volunteer)"
          startDate="September 2019"
          endDate="April 2020"
        >
          <li>
            Utilizes Sketch and Adobe creative software to develop and optimize
            assets for deployment in external marketing and servicing emails.
          </li>
          <li>
            Develops HTML emails for numerous lines of business by leveraging a
            library of code snippets and coding custom layout elements as
            necessary.
          </li>
          <li>
            Collaborates with project manager, copywriter, and internal partners
            to develop strategy, identify challenges, and deliver effective and
            timely creative.
          </li>
          <li>
            Performs technical review of code written by peer designers to
            ensure that projects satisfy the aims of the messaging strategy in
            addition to meeting internal brand, technical, and accessibility
            standards for email development.
          </li>
        </Collapsible>
      </section>
  
    </div>
  );
}
