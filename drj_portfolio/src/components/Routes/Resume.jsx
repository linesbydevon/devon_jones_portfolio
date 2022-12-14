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
      <section id="quote">
  <h2>References</h2>
  <div>
<blockquote>
  <p>Devon has effectively replaced two senior web designers and carried the full team workload while also mentoring our new graphic designer. In addition
    to that, he has improved the quality and timeliness of our email product. His proactivity in monitoring this channel has again never been seen in my tenure here.
    </p>
    <p>I&rsquo;m not even sure how to express the level of collaboration Devon brings to the group. He&rsquo;s continually refining process for everyone&rsquo;s benefit and this is echoed in his team&rsquo;s feedback
    of what he brings to the team from his flexible attitude, his impressive capacity, and his delightful disposition.</p>

</blockquote>
<figcaption>
  <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHeYR_hNGTf7Q/profile-displayphoto-shrink_800_800/0/1564147276704?e=1671062400&v=beta&t=TFjDKzYJRC123dsjmXoHNsHX_L-JjiaxRaX7xLWNmFo" />
  <h3>Synthia Bialkowski</h3>
  <p>EAB Creative Supervisor</p>
</figcaption>
</div>
</section>
<section id="references">
  
  <section>
    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGbtJezNh1Pug/profile-displayphoto-shrink_800_800/0/1516333195349?e=1671062400&v=beta&t=dibrNfZ3dJBaatB1-6Z4emYlfJpjsO-0j1ab4gbxlqc" />
    <h3>Malcolm McDonald</h3>
    <p>Capital One Digital Messaging Supervisor</p>
    </section>
    <section>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHmeyP1BZ9I3A/profile-displayphoto-shrink_800_800/0/1633835650494?e=1671062400&v=beta&t=GJ_cX8nbJtBbls-wJphqacPxzUEiN9Et2yO8RT5amJg" />
    <h3>Margaux Jacks</h3>
    <p>EAB Senior Art Director</p>
  </section>
  <section>
    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF5dX2xZKdCJg/profile-displayphoto-shrink_800_800/0/1585536998358?e=1671062400&v=beta&t=nVPkQuaw6-sCzk2fHGDy1_rG_AmwMUD3tZpHdnQsSJg" />
    <h3>Meredith Dobbins</h3>
    <p>EAB Senior Copywriter</p>
  </section>
</section>
    </div>
  );
}
