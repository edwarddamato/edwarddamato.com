import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './CV.scss';

const CV = (): React.ReactElement<any> => (
  <React.Fragment>
    <header>
      <h1>
        Edward D'Amato <span>CV</span>
      </h1>
      <ul>
        <li className={'contact online print'}>
          <a href={'mailto:info@edwarddamato.com'}>info@edwarddamato.com</a>
        </li>
        <li className={'contact online print'}>
          <a href={'http://www.edwarddamato.com'} target={'_blank'}>
            edwarddamato.com
          </a>
        </li>
        <li className={'contact online'}>
          <a href={'https://github.com/edwarddamato'} target={'_blank'}>
            Github
          </a>
        </li>
        <li className={'contact print'}>
          <a href={'https://github.com/edwarddamato'} target={'_blank'}>
            {'https://github.com/edwarddamato'}
          </a>
        </li>
        <li className={'contact online'}>
          <a href={'http://lnkd.in/rHMR2B'} target={'_blank'}>
            LinkedIn
          </a>
        </li>
        <li className={'contact print'}>
          <a href={'http://lnkd.in/rHMR2B'} target={'_blank'}>
            {'http://lnkd.in/rHMR2B'}
          </a>
        </li>
      </ul>
    </header>
    <section id={'printer-friendly'}>
      <button
        onClick={() => {
          window.print();
        }}
      >
        Print me!
      </button>
    </section>
    <section id={'summary'}>
      <h1>Summary</h1>
      <p>
        {`Currently working as an Agile Software Engineer; part of a cross-functional
        team improving Seller Experience at eBay.`}
      </p>
      <p>
        {`Experienced Software Engineer with a demonstrated history of working in the internet industry.
        Huge fan of clean code, close collaboration and automation. Avid practitioner of test-driven
        development and functional programming techniques.`}
      </p>
    </section>
    <section id={'work-experience'}>
      <h1>Work Experience</h1>
      <h2>Industry</h2>
      <ol className={'timeline'}>
        <li>
          <p className={'date'}>2016 - present</p>
          <p>
            <strong>Agile Software Engineer</strong>
            &nbsp;&bull;&nbsp;
            <a href={'https://www.ebay.co.uk'} target={'blank'} className={'company'}>
              eBay
            </a>
          </p>
          <p className={'note'}>
            {[
              `Delivered a reusable, scalable, WAI-ARIA compliant library in vanilla JavaScript for eBay web
              applications, which provides user onboarding tours for any eBay user.`,
              `Delivered an isomorphic, fully responsive, WAI-ARIA compliant web application for eBay sellers
              to collect VAT information using NodeJS, TypeScript and Marko (an alternative JavaScript framework
              to React).`,
              `Contributed to the delivery of a new REST API responsible for providing a seller's
              VAT information. Currently taking around ~600 M hits a day.`,
              `Part of an agile team practicing pair programming, iterative development, XP,
              TDD and continuous integration and delivery.`
            ].map((note, i) => (
              <React.Fragment key={i}>
                &bull;&nbsp;
                {`${note}`}
                <br />
              </React.Fragment>
            ))}
          </p>
        </li>
        <li>
          <p className={'date'}>2015 - 2016</p>
          <p>
            <strong>UI Developer</strong>
            &nbsp;&bull;&nbsp;
            <a href={'https://www.harrods.com'} target={'blank'} className={'company'}>
              Harrods
            </a>
          </p>
          <p className={'note'}>
            {[
              `Transformed creative designs into pixel perfect, fully responsive, adaptive and device agnostic
              user interfaces. Embraced progressive enhancement and graceful degradation strategies when building
              UIs.`,
              `Delivered BORDERFREE; supporting multi-currency payments. Responsible for building key areas;
              such as country/currency selector features as well as checkout UI enhancements.`,
              `Heavily contributed to the delivery of the new Harrods.com, creating UI components from scratch
              for core areas such as product pages, product galleries, megamenu, quick shop and mini cart.`,
              `Heavily contributed to the creation of a custom grid system, catering for 5 different screen
              sizes.`
            ].map((note, i) => (
              <React.Fragment key={i}>
                &bull;&nbsp;
                {`${note}`}
                <br />
              </React.Fragment>
            ))}
          </p>
        </li>
        <li>
          <p className={'date'}>2010 - 2015</p>
          <p>
            <strong>Web Projects Team Lead / Senior .NET Web Developer</strong>
            &nbsp;&bull;&nbsp;
            <a href={'https://www.icon.com.mt'} target={'blank'} className={'company'}>
              ICON
            </a>
          </p>
          <p className={'note'}>
            Delivered numerous projects across different industries as a full stack developer, often building web
            projects from the ground up, using ASP.NET, SQL Server and JavaScript amongst other technologies.
            Highlighted projects include:
            <br />
            &bull; Delivered a real-time web-based solution as part of&nbsp;
            <a href={'http://www.electricvehiclesmalta.eu/chargingstations'} target={'blank'}>
              electricvehiclesmalta.eu
            </a>
            , showing 90 geo-located eletric charging stations offering booking facilities.
            <br />
            &bull; Delivered&nbsp;
            <a href={'https://www.laferla.com.mt'} target={'blank'}>
              Laferla.com.mt
            </a>
            as the lead developer, creating a wizard-like flow to purchase insurance online, delivering dynamic quotes
            and discounts.
            <br />
            &bull; Heavily contributed as the lead developer to the delivery of&nbsp;
            <a href={'https://myeportfolio.gov.mt/'} target={'blank'}>
              ePortfolio
            </a>
            , building core features from the ground up across the whole stack.
            <br />
            &bull; Heavily contributed to the creation of ICON's in-house CMS (called SNAP), building core features from
            the ground up across the whole stack such as an interactive and dynamic Page Console.
            <br />
          </p>
        </li>
        <li>
          <p className={'date'}>2005 - 2009</p>
          <p>
            <strong>Software Developer</strong>
            &nbsp;&bull;&nbsp;
            <a href={'https://www.transactium.com'} target={'blank'} className={'company'}>
              Transactium
            </a>
          </p>
          <p className={'note'}>
            Delivered payment gateway projects such as a hosted payments solution and tools (as web applications) for
            merchants and acquirers (banks).
          </p>
        </li>
      </ol>
      <h2>Community</h2>
      <ol className={'timeline'}>
        <li>
          <p className={'date'}>Jan 2018</p>
          <p>
            <strong>JavaScript coach</strong>
            &nbsp;&bull;&nbsp;
            <a href={'https://www.codebar.io/workshops/648'} target={'blank'} className={'company'}>
              Codebar.io Workshop
            </a>
          </p>
          <p className={'note'}>Coached fellow developers at a codebar hosted at eBay's offices in London.</p>
        </li>
        <li>
          <p className={'date'}>Sep 2017</p>
          <p>
            <strong>Innovation project</strong>
            &nbsp;&bull;&nbsp;
            <a href={'https://twitter.com/devinwenig/status/908444313050169344'} target={'blank'} className={'company'}>
              eBay EXPO 2017
            </a>
          </p>
          <p className={'note'}>
            Participated in eBay's EXPO 2017 in San Jose where teams from across the different eBay regions come
            together and present concepts, ideas and prototypes. My project was chosen as one of the winners from all
            the other entries across teams in London and Berlin.
          </p>
        </li>
        <li>
          <p className={'date'}>Dec 2013</p>
          <p>
            <strong>Hackathon for charity</strong>
            &bull;
            <a
              href={'https://www.icon.com.mt/news/storyteller-available-now-2/'}
              target={'blank'}
              className={'company'}
            >
              Tech Spark / Microsoft Hackathon
            </a>
          </p>
          <p className={'note'}>
            Participated in a hackathon organised by Tech Spark, a tech community in Malta in collbaration with
            Microsoft. Part of a three-strong team that built a Windows 8 application called 'Storyteller', integrated
            with Facebook's API.
          </p>
        </li>
      </ol>
    </section>
    <section id={'education'}>
      <h1>Education</h1>
      <ol className={'timeline'}>
        <li>
          <p className={'date'}>2013–2014</p>
          <p>
            <strong>B.Sc. in Computer Science</strong> (1st className)
          </p>
          <p>
            <a href={'https://www.herts.ac.uk/'} target={'blank'}>
              University of Hertfordshire
            </a>
          </p>
          <p className={'note'}>
            Thesis:
            <q>
              Potato Catcher: Involved building a mobile game based on the Android platform using JAVA. The game
              revolves around the idea of ‘hot potato’, whereby a group of people positioned in a circle pass around an
              object with a countdown. When the countdown expires, the person holding the object loses. The game works
              with each person having their own smartphone, each connected to the same game session. With the use of
              gestures, a user can pass the ‘object’ to another person in the session.
            </q>
            , Advisor: Dr. Guy Saward
          </p>
        </li>
        <li>
          <p className={'date'}>2010 - 2012</p>
          <p>
            <strong>Diploma in Computing &amp; Information Systems</strong>
          </p>
          <p>
            <a href={'https://www.gold.ac.uk/'} target={'blank'}>
              University of London
            </a>
          </p>
        </li>
        <li>
          <p className={'date'}>2003–2005</p>
          <p>
            <strong>MCAST-BTEC National Diploma in Computing (Software Development)</strong>
          </p>
          <p>
            <a href={'http://www.mcast.edu.mt/inst/6'} target={'blank'}>
              MCAST Malta
            </a>
          </p>
        </li>
      </ol>
    </section>
    <section id={'technical-skills'}>
      <h1>Skills</h1>
      <h2>Technical</h2>
      <p>Vast understanding of, and experience working with web technologies, including:</p>
      <ul>
        <li>JavaScript (ECMAScript), DOM &amp; related APIs</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>CSS (including CSS3)</li>
        <li>CSS preprocessors (SASS, LESS)</li>
        <li>HTML5 and related APIs</li>
        <li>Web frameworks; including React, MarkoJS, Angular, JQuery</li>
        <li>Single page applications and state management; including Redux</li>
        <li>WAI-ARIA compliance (accessibility)</li>
        <li>Bundling and minification (Webpack, Lasso)</li>
        <li>Code transpilers (Babel, TypeScript)</li>
        <li>RESTful APIs</li>
        <li>
          I have experience with numerous other libraries, tools and frameworks related to the above including npm,
          Yarn, Ramda.js, Jest, Mocha, Chai, sinon, Nightwatch.js, eslint/tslint, Grunt/Gulp, prettier, nock, axios,
          Selenium
        </li>
      </ul>
      <p>
        Throughout the years, I have also worked with a wide range of programming languages and technologies, including
        C#/ASP.NET, SQL (SQL Server, MySQL, Oracle, Teradata), Mongo, Java and Scala.
      </p>
      <h2>Practices and Methodologies</h2>
      <ul>
        <li>Test-driven development</li>
        <li>Testing and testing strategies (unit, integration, end to end, regression, exploratory)</li>
        <li>Continuous integration and delivery (automation, build pipelines)</li>
        <li>Build pipelines; mostly using Jenkins, Gitlab, TravisCI</li>
        <li>Continous code quality inspection and static code analysis (mostly using Sonarqube)</li>
        <li>Coding katas</li>
        <li>Trunk based and feature-branch based development</li>
        <li>
          Agile (Scrum, Kanban, XP) and respective ceremonies (daily stand-up, retrospective, planning and refinement
          sessions)
        </li>
        <li>Security (OWASP Top 10)</li>
      </ul>
    </section>
    <section id={'awards'}>
      <h1>Awards</h1>
      <ol className={'timeline'}>
        <li>
          <p className={'date'}>2015</p>
          <p>
            <strong>Best eGovernment Initiative</strong> (electricvehiclesmalta.eu - ICON)
          </p>
          <p>
            <a href={'http://ebusinessawards.mca.org.mt/past-editions/2015'} target={'blank'}>
              MCA eBusiness Awards 2015
            </a>
          </p>
        </li>
        <li>
          <p className={'date'}>2014</p>
          <p>
            <strong>Most Innovative Solution</strong> (Laferla Insurance - ICON)
          </p>
          <p>
            <a href={'http://ebusinessawards.mca.org.mt/past-editions/2014'} target={'blank'}>
              MCA eBusiness Awards 2014
            </a>
          </p>
        </li>
      </ol>
    </section>
    <section id={'languages'}>
      <h1>Languages</h1>
      <ul>
        <li>
          <strong>Maltese</strong>: Native
        </li>
        <li>
          <strong>English</strong>: Native
        </li>
        <li>
          <strong>Italian</strong>: Fluent
        </li>
      </ul>
    </section>
    <section id={'professional-interests'}>
      <h1>Professional interests</h1>
      <p>Front-end web development, functional programming, open source, give back to the community through coding</p>
    </section>
    <section id={'personal-interests'}>
      <h1>Personal interests</h1>
      <p>Sports and fitness, Brazilian jiu-jitsu, football, interior design, environment, animals and wildlife.</p>
    </section>
    <footer>
      <p>References are available upon request.</p>
    </footer>
  </React.Fragment>
);

ReactDOM.render(<CV />, document.getElementById('root'));
