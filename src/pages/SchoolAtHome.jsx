const base = '/assets/images/design/school-at-home';

export default function SchoolAtHome() {
  return (
    <article className="page page--school-at-home">
      <section className="sah-hero">
        <div className="sah-hero__copy">
          <p>
            My friend Alisa runs a series of events titled School at Home. The concept is that we
            are all professors and students. Each event, there are around 5–6 lectures by people,
            ranging from various areas. Some examples from the past are: the science of flirting,
            math as a language, music modes, and more.
          </p>
          <p>
            As she sought to make these events more frequent and open to a larger audience, she
            realized that School at Home needed a visual identity. Thus, I took on the role of
            Artistic Director of School at Home and got to working on a visual identity.
          </p>
        </div>
        <div className="sah-overlap">
          <img
            className="sah-overlap__back"
            src={`${base}/music-modes-class.jpg`}
            alt="Music modes class at School at Home"
          />
          <img
            className="sah-overlap__front"
            src={`${base}/mozarella-class.jpg`}
            alt="Mozzarella class at School at Home"
          />
        </div>
      </section>

      <section className="sah-arches">
        <div className="sah-arches__brainstorm">
          <img
            className="sah-arch"
            src={`${base}/brainstorming.jpg`}
            alt="Brainstorming notes for School at Home"
          />
          <h3 className="sah-heading">Brainstorming on what we want in the visual identity</h3>
        </div>

        <div className="sah-arches__logo-plan">
          <div className="sah-arches__logo-plan-copy">
            <h3 className="sah-heading">The first order of action was to design a logo</h3>
            <p>
              I focused on both words: school and home. Icons that represent both school and home
              are a building. What differentiates between the buildings? A clock is usually associated
              with school icons. A building with a chimney, windows, and a door is the usual icon for
              home.
            </p>
          </div>
          <img
            className="sah-arch sah-arches__logo-img"
            src={`${base}/logo-planning.jpg`}
            alt="Logo planning sketches"
          />
        </div>
      </section>

      <h3 className="sah-heading sah-kicker--block">
        Next, I wanted to create a set of 5 core icons.
      </h3>

      <div className="sah-pair">
        <img src={`${base}/icon-planning-1.jpg`} alt="Icon planning sketches" />
        <img src={`${base}/icon-planning-2.jpg`} alt="More icon planning sketches" />
      </div>

      <div className="sah-copy">
        <h3 className="sah-heading">Then, I focused on designing an attendance stamp card</h3>
        <p>
          The idea was that you receive a stamp on your attendance card for every School at Home
          you attend. Every time you finish an attendance card by attending 8 School at Homes, you
          receive a prize!
        </p>
      </div>

      <section className="sah-stagger">
        <img
          className="sah-arch sah-stagger__left"
          src={`${base}/attendance-card-planning-1.jpg`}
          alt="Attendance card layout sketches"
        />
        <h3 className="sah-heading sah-stagger__label">Brainstorming</h3>
        <img
          className="sah-arch sah-stagger__right"
          src={`${base}/attendance-card-planning-2.jpg`}
          alt="Attendance card planning sketches"
        />
        <h3 className="sah-heading sah-stagger__caption">
          I hand carved a stamp with the school@Home logo
        </h3>
      </section>

      <section className="sah-finale">
        <div className="sah-finale__copy">
          <h3 className="sah-heading sah-kicker--block">The final product</h3>
          <p className="sah-finale__note">
            There&apos;s still more to come, especially with people starting to complete their
            attendance cards.
          </p>
        </div>
        <div className="sah-tilt">
          <img
            className="sah-tilt__a"
            src={`${base}/physical-attendance-card-front.jpg`}
            alt="Attendance card front"
          />
          <img
            className="sah-tilt__b"
            src={`${base}/physical-attendance-card-back.jpg`}
            alt="Attendance card back"
          />
        </div>
      </section>

      <h3 className="sah-heading sah-figma">
        If you&apos;re curious, browse the Figma here:{' '}
        <img className="sah-figma__icon" src={`${base}/logo.png`} alt="" />
      </h3>
    </article>
  );
}
