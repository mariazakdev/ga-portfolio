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
          <article key={b.id} className="bugs__item">
            <header className="bugs__item-header">
              <div>
                <div className="bugs__item-project">{b.project}</div>
                <h3 className="bugs__item-name">
                  {index + 1}. {b.title}
                </h3>
              </div>

              <div className="bugs__item-chips">
                <span className={`bugs__item-chip bugs__item-chip--${b.severity.toLowerCase()}`}>
                  {b.severity}
                </span>
                <span className="bugs__item-chip bugs__item-chip--neutral">{b.platform}</span>
                <span className="bugs__item-chip bugs__item-chip--neutral">{b.status}</span>
              </div>
            </header>

            <div className="bugs__item-layout">
              <div className="bugs__item-media">
                <video
                  className="bugs__item-video"
                  src={b.video}
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>

              <div className="bugs__item-body">
                <div className="bugs__item-block">
                  <div className="bugs__item-label">Summary</div>
                  <div className="bugs__item-text">{b.summary}</div>
                </div>

                <div className="bugs__item-block">
                  <div className="bugs__item-label">Repro Steps</div>
                  <ol className="bugs__item-steps">
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