import './BugPortfolio.scss'

const BUGS = [
  {
    id: 'bug1',
    project: 'Endless Night: Darkness Within',
    title: 'Texture Artifact Occluding Background Layer',
    severity: 'Major',
    platform: 'PC',
    status: 'Open',
    summary: 'A texture artifact fully obscures the background layer in the vigil area.',
    steps: [
      'Enter the vigil area and move the player toward the far left side.',
      'Move the player close to the left edge of the platform as far as possible.',
      'Control (fly) the character through the level layout of the vigil area.',
      'The texture artifact fully obscures the background layer.',
    ],
  },
  {
    id: 'bug2',
    project: 'The Last Sky (English Version)',
    title: 'UI Text Overflow in Menu Buttons',
    severity: 'Minor',
    platform: 'PC',
    status: 'Open',
    summary: 'Some menu labels overflow their button container at certain resolutions.',
    steps: [
      'Launch the game and open the main menu.',
      'Switch resolution to 1280x720 and 1366x768.',
      'Navigate through menu items with longer labels.',
      'Observe text clipping/overflow on specific buttons.',
    ],
  },
  {
    id: 'bug3',
    project: 'MLB Home Run Derby VR',
    title: 'Intermittent Controller Input Drop',
    severity: 'Major',
    platform: 'VR',
    status: 'Investigating',
    summary: 'Controller inputs occasionally stop registering for 1–2 seconds during gameplay.',
    steps: [
      'Start a match and play normally for 5–10 minutes.',
      'Perform repeated swings and menu interactions.',
      'Observe sporadic input drops (no response).',
      'Inputs resume without reconnecting controller.',
    ],
  },
]

function BugPortfolio() {
  return (
    <div className="bugs">
      <h2 className="bugs__title">BUG PORTFOLIO</h2>

      <div className="bugs__panel">
        {BUGS.map((b, index) => (
          <section key={b.id} className="bug">
            <div className="bug__header">
              <div className="bug__left">
                <div className="bug__project">{b.project}</div>
                <h3 className="bug__name">
                  {index + 1}. {b.title}
                </h3>
              </div>

              <div className="bug__chips">
                <span className={`chip chip--${b.severity.toLowerCase()}`}>{b.severity}</span>
                <span className="chip chip--neutral">{b.platform}</span>
                <span className="chip chip--neutral">{b.status}</span>
              </div>
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

              {/* Later: add screenshot/video */}
              {/* <div className="bug__media">...</div> */}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default BugPortfolio
