import './About.scss'
import profile from '../assets/ryan.jpg'

function About() {
  return (
    <div id="about" className="about">

      <h2 className="about__title">ABOUT ME</h2>

      <div className="about__top">
        <div className="about__photo-frame">
          <img src={profile} alt="Ryan Pirnasar" />
          <div className="about__photo-name">RYAN</div>
        </div>

        <div className="about__text">
          <p>
            Hey! I'm <strong>Ryan Pirnasar</strong>, an experienced QA Tester
            with over 5 years of experience ensuring the quality of video games.
            My work focuses on gameplay bugs, edge cases, and software stability,
            ensuring the player's experience is smooth and immersive through
            detailed and thorough testing efforts.
          </p>

          <p>
            With an advanced college diploma in Game Development from
            Centennial College and hands-on QA testing for both major and indie
            game titles across mobile, PC, consoles, and VR, I've honed my
            skills in identifying critical issues and providing clear,
            actionable reports for development teams.
          </p>
        </div>
      </div>

      <div className="about__bottom">

        <div className="about__card about__education">
          <h3>EDUCATION</h3>
          <p>
            Advanced College Diploma in Game Development
            from Centennial College
          </p>
        </div>

        <div className="about__card about__projects">
          <h3>PROJECTS TESTED</h3>
          <ul>
            <li>Endless Night: The Darkness Within</li>
            <li>The Last Sky (English Version)</li>
            <li>The Last Sky (Localization – Chinese, Japanese, Korean)</li>
            <li>MLB Home Run Derby VR</li>
          </ul>
        </div>

      </div>

      <div className="about__actions">
        <button className="btn btn--gold">BUG PORTFOLIO</button>
        <button className="btn btn--red">CONTACT</button>
      </div>

    </div>
  )
}

export default About
