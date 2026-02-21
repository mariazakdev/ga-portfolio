import './BugPortfolio.scss'

import bug1Video from '../assets/Page-Bug Report 1.mp4'
import bug2Video from '../assets/Page-Bug Report 2.mp4'

const BUGS = [
  {
    id: 'bug1',
    project: 'Endless Night: Darkness Within (Project)',
    title: 'Texture Artifact Occluding Background Layer',
    severity: 'Major',
    platform: 'PC',
    status: 'Open',
    summary:
      'A texture artifact fully obscures the background layer in the vigil area.',
    steps: [
      'Enter the vigil area and move the character toward the far left side.',
      'Move close to the left edge of the platform as far as possible.',
      'Fly through the vigil area layout.',
      'The texture artifact fully obscures the background layer.',
    ],
    video: bug1Video,
  },
  {
    id: 'bug2',
    project: 'Endless Night: Darkness Within (Project)',
    title: 'Character Clipping Through Floor in Outer Space Level',
    severity: 'Major',
    platform: 'PC',
    status: 'Open',
    summary:
      'Cape Jake clips through the wooden floor edge and falls into Outer Space.',
    steps: [
      'At level start, move Cape Jake left.',
      'Float right and drop onto the burning house floor.',
      'Move right and skip dialogue.',
      'Avoid summoned firefly and proceed right.',
      'Move to the wooden floor edge.',
      'Cape Jake clips through and falls.',
    ],
    video: bug2Video,
  },
]

export default function BugPortfolio() {
  return (
    <section id="portfolio" className="bugs">
      <h2 className="bugs__title">BUG PORTFOLIO</h2>

      <div className="bugs__panel">
        {BUGS.map((b, index) => (
          <article key={b.id} className="bug">
            <header className="bug__header">
              <div>
                <div className="bug__project">{b.project}</div>
                <h3 className="bug__name">
                  {index + 1}. {b.title}
                </h3>
              </div>

              <div className="bug__chips">
                <span className={`chip chip--${b.severity.toLowerCase()}`}>
                  {b.severity}
                </span>
                <span className="chip chip--neutral">{b.platform}</span>
                <span className="chip chip--neutral">{b.status}</span>
              </div>
            </header>

            <div className="bug__layout">
              <div className="bug__media">
                <video
                  className="bug__video"
                  src={b.video}
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>

              <div className="bug__body">
                <div className="bug__block">
                  <div className="bug__label">Summary</div>
                  <div className="bug__text">{b.summary}</div>
                </div>

                <div className="bug__block">
                  <div className="bug__label">Repro Steps</div>
                  <ol className="bug__steps">
                    {b.steps.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}