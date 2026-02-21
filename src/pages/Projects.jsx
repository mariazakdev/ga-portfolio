import "./Projects.scss";

import endlessNight from "../assets/endless_night.PNG";
import mlbVr from "../assets/run_derby.PNG";
import lastSkyEn from "../assets/The_last_sky.png";
import lastSkyLoc from "../assets/The_last_sky_Japanese.png";

const PROJECTS = [
  {
    id: "endless-night",
    fileLabel: "Endless Night: The Darkness Within",
    img: endlessNight,
    summary: [
      "Endless Night is an atmospheric, narrative-driven adventure game available on PC (Steam). The game blends interactive storytelling with immersive exploration, guiding players through dreamlike environments filled with puzzles, branching dialogue, and emotional decision-making.",
      "During development, I tested the game extensively on PC using multiple input methods—including wired controllers, wireless controllers, and keyboard/mouse—to ensure smooth functionality across different playstyles.",
    ],
  },
  {
    id: "mlb-vr",
    fileLabel: "MLB Home Run Derby VR",
    img: mlbVr,
    summary: [
      "MLB Home Run Derby VR is a virtual reality sports experience that brings Major League Baseball’s iconic home run competition into an immersive 3D environment.",
      "In my QA role, I tested the game in both single-player and multiplayer modes. I focused on gameplay functionality and player immersion.",
    ],
  },
  {
    id: "last-sky-en",
    fileLabel: "The Last Sky",
    img: lastSkyEn,
    summary: [
      "The Last Sky is a narrative-driven psychological puzzle game set in a surreal dreamscape that explores themes of memory, trauma, and self-reflection. Players navigate visually striking environments, solve environmental puzzles, and uncover fragments of the protagonist’s past to progress through the story.",
      "My testing focused on gameplay flow, puzzle clarity, and overall player experience to help ensure the game felt immersive, stable, and emotionally engaging.",
    ],
  },
  {
    id: "last-sky-loc",
    fileLabel: "The Last Sky. Chinese, Korean, and Japanese Version",
    img: lastSkyLoc,
    summary: [
      "The Last Sky is a narrative-driven psychological puzzle game set within a surreal dream world that explores memory and personal reflection.",
      "During testing, I focused on the Chinese, Japanese, and Korean localized versions, verifying translation accuracy, cultural context, subtitle readability, UI text formatting, and font rendering. My goal was to ensure each language version delivered a clear, immersive, and consistent player experience while maintaining the emotional tone of the original game.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">PROJECTS</h2>

      <div className="projects__panel">
        <div className="projects__list">
          {PROJECTS.map((p) => (
            <article key={p.id} className="projectCard">
              <div className="projectCard__media">
                <img className="projectCard__img" src={p.img} alt={p.fileLabel} />
              </div>

              <div className="projectCard__text">
                <h3 className="projectCard__heading">{p.fileLabel}</h3>

                {p.summary.map((para, idx) => (
                  <p key={idx} className="projectCard__p">
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}