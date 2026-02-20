import './Contact.scss'
import avatar from '../assets/ryan.jpg'

function Contact() {
  return (
    <div id="contact" className="contact">
      <h2 className="contact__title">CONTACT ME</h2>

      <div className="contact__panel">
        <h3 className="contact__subtitle">Get in Touch!</h3>

        <div className="contact__grid">
          <div className="contact__avatar">
            <img src={avatar} alt="Ryan pixel avatar" />
          </div>

          <div className="contact__info">
            <div className="contact__row">
              <span className="contact__icon" aria-hidden>✉️</span>
              <span className="contact__label">Email:</span>
              <a className="contact__value" href="mailto:ryan123451991@hotmail.com">
                ryan123451991@hotmail.com
              </a>
            </div>

            <div className="contact__row">
              <span className="contact__icon" aria-hidden>📞</span>
              <span className="contact__label">Phone:</span>
              <a className="contact__value" href="tel:+14165535492">
                (416) 553-5492
              </a>
            </div>

            <div className="contact__row">
              <span className="contact__icon" aria-hidden>in</span>
              <span className="contact__label">LinkedIn:</span>
              <a
                className="contact__value"
                href="https://www.linkedin.com/in/ryanpirnasar/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ryanpirnasar
              </a>
            </div>

            <p className="contact__footer">I look forward to hearing from you!</p>
          </div>
        </div>
      </div>

      <div className="contact__actions">
        <button className="btn btn--blue">BACK TO PORTFOLIO</button>
        <button className="btn btn--red">SEND MESSAGE</button>
      </div>
    </div>
  )
}

export default Contact
