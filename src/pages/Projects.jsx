import { Link } from 'react-router-dom'
import './Projects.scss'

// Replace these with your real image imports
// import endlessNight from '../assets/projects/endless-night.png'
// import mlbVr from '../assets/projects/mlb-vr.png'
// import lastSky from '../assets/projects/last-sky.png'
// import lastSkyLoc from '../assets/projects/last-sky-loc.png'

const PROJECTS = [
  { id: 'vid1', title: 'Video 1', img: '/src/assets/QA Portfolio Asset 3 Bug Portfolio Page-Bug Report #1.mp4 ' },
  { id: 'vid2', title: 'Video 2', img: '/src/assets/projects/d:\Ryan Data for site\QA Portfolio Asset 6 (Bug Portfolio Page-Bug Report #2 ).mp4' },

]

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__title">PROJECTS</h2>

      <div className="projects__panel">
        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <div key={p.id} className="project">
              <div className="project__frame">
                <img className="project__img" src={p.img} alt={p.title} />
              </div>
              <div className="project__name">{p.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects__actions">
        <Link className="btn btn--blue" to="/portfolio">BACK TO PORTFOLIO</Link>
      </div>
    </div>
  )
}
