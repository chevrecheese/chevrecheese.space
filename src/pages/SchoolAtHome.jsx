function Section({ title, children }) {
  return (
    <section className="case-section">
      {title && <h2 className="case-section__title">{title}</h2>}
      {children}
    </section>
  );
}

function Figure({ src, alt, caption }) {
  return (
    <figure className="case-figure">
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function SchoolAtHome() {
  const base = '/assets/images/design/school-at-home';

  return (
    <article className="page page--case-study">
      <header className="case-header">
        <h1>School at Home</h1>
        <p className="case-lead">
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
      </header>

      <Section title="Brainstorming on what we want in the visual identity">
        <Figure src={`${base}/img_1235.jpeg`} alt="Brainstorming notes" />
      </Section>

      <Section title="The first order of action was to design a logo">
        <p>
          I focused on both words: school and home. Icons that represent both school and home are
          a building. What differentiates between the buildings? A clock is usually associated with
          school icons. A building with a chimney, windows, and a door is the usual icon for home.
        </p>
        <Figure src={`${base}/logo.png`} alt="School at Home logo" />
      </Section>

      <Section title="Next, I wanted to create a set of 5 core icons.">
        <Figure src={`${base}/img_2885.jpeg`} alt="Core icon set" />
      </Section>

      <Section title="Then, I focused on designing an attendance stamp card">
        <p>
          The idea was that you receive a stamp on your attendance card for every School at Home
          you attend. Every time you finish an attendance card by attending 8 School at Homes, you
          receive a prize!
        </p>
        <Figure src={`${base}/img_5479.jpeg`} alt="Attendance stamp card brainstorming" />
        <Figure src={`${base}/img_5480.jpeg`} alt="Stamp card design" />
      </Section>

      <Section title="I hand carved a stamp with the school@Home logo">
        <Figure src={`${base}/img_5481.jpeg`} alt="Hand-carved stamp process" />
        <Figure src={`${base}/img_5482.jpeg`} alt="Hand-carved stamp" />
      </Section>

      <Section title="The final product">
        <Figure src={`${base}/img_5483.jpeg`} alt="Final stamp card product" />
        <Figure src={`${base}/img_5494.jpeg`} alt="School at Home event" />
        <p>
          There&apos;s still more to come, especially with people starting to complete their
          attendance cards.
        </p>
        <p className="case-note">Figma link coming soon.</p>
      </Section>
    </article>
  );
}
