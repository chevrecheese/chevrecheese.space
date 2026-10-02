const base = '/assets/images/design/school-at-home';

export default function SchoolAtHome() {
  return (
    <article className="page page--school-at-home">
      <div className="sah-desktop-view">
        <section className="sah-hero">
          <div className="sah-hero__copy">
            <p>
              My friend{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfi3SK1I-bbZifWfiGqAnty57rSMO4zfphAz8Mm5LGbzwbrpQ/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Alisa
              </a>{' '}
              runs a series of events titled School at home. The concept is that we are all
              professors and we are all students. Each event, there are around 5-6 lectures ranging
              from various areas. Some examples from the past are: the science of flirting, math as
              a language, music modes, and more.
            </p>
            <p>
              As she sought to make these events more frequent and open to a larger audience, she
              realized that school at home needed a visual identity. Thus, I took on the role of
              Artistic Director of School at Home and got to work.
            </p>
          </div>
          <div className="sah-overlap">
            <img
              className="sah-overlap__back"
              src={`${base}/music-modes-class.jpg`}
              alt="Music modes class at School at Home"
              width={1400}
              height={1050}
              fetchPriority="high"
            />
            <img
              className="sah-overlap__front"
              src={`${base}/mozarella-class.jpg`}
              alt="Mozzarella class at School at Home"
              width={1050}
              height={1400}
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="sah-arches">
          <div className="sah-arches__brainstorm">
            <img
              className="sah-arch"
              src={`${base}/brainstorming.jpg`}
              alt="Brainstorming notes for School at Home"
              width={1050}
              height={1400}
              loading="lazy"
            />
            <h3 className="sah-heading">BRAINSTORMING ON WHAT WE WANT IN THE VISUAL IDENTITY</h3>
          </div>

          <div className="sah-arches__logo-plan">
            <div className="sah-arches__logo-plan-copy">
              <h3 className="sah-heading">THE FIRST ORDER OF ACTION WAS TO DESIGN A LOGO</h3>
              <p>
                I focused on both words: SCHOOL and HOME. Icons that represent both school and home
                are buildings. What differentiates between the buildings? A clock is usually associated
                with school icons. A building with a chimney, windows, and a door is the usual icon for
                home.
              </p>
            </div>
            <img
              className="sah-arch sah-arches__logo-img"
              src={`${base}/logo-planning.jpg`}
              alt="Logo planning sketches"
              width={1400}
              height={1050}
              loading="lazy"
            />
          </div>
        </section>

        <h3 className="sah-heading sah-kicker--block">
          NEXT, I WANTED TO CREATE A SET OF 5 CORE ICONS
        </h3>

        <div className="sah-pair">
          <img
            src={`${base}/icon-planning-1.jpg`}
            alt="Icon planning sketches"
            width={1050}
            height={1400}
            loading="lazy"
          />
          <img
            src={`${base}/icon-planning-2.jpg`}
            alt="More icon planning sketches"
            width={1400}
            height={1050}
            loading="lazy"
          />
        </div>

        <div className="sah-copy">
          <h3 className="sah-heading">THEN, I FOCUSED ON DESIGNING AN ATTENDANCE STAMP CARD</h3>
          <p>
            The idea is that you receive a stamp on your attendance card for every school at home
            you attend. Every time you finish an attendance card by attending 8 school at homes, you
            receive a prize!
          </p>
        </div>

        <section className="sah-stagger">
          <img
            className="sah-arch sah-stagger__left"
            src={`${base}/attendance-card-planning-1.jpg`}
            alt="Attendance card layout sketches"
            width={1400}
            height={1050}
            loading="lazy"
          />
          <h3 className="sah-heading sah-stagger__label">BRAINSTORMING</h3>
          <img
            className="sah-arch sah-stagger__right"
            src={`${base}/attendance-card-planning-2.jpg`}
            alt="Attendance card planning sketches"
            width={1400}
            height={1050}
            loading="lazy"
          />
          <h3 className="sah-heading sah-stagger__caption">
            I HAND CARVED A STAMP WITH THE SCHOOL@HOME LOGO
          </h3>
        </section>

        <section className="sah-finale">
          <div className="sah-finale__copy">
            <h3 className="sah-heading sah-kicker--block">THE FINAL PRODUCT</h3>
            <p className="sah-finale__note">
              THERE&apos;S STILL MORE TO COME, ESPECIALLY WITH PEOPLE STARTING TO COMPLETE THEIR
              ATTENDANCE CARDS
            </p>
          </div>
          <div className="sah-tilt">
            <img
              className="sah-tilt__a"
              src={`${base}/physical-attendance-card-front.jpg`}
              alt="Attendance card front"
              width={1400}
              height={1050}
              loading="lazy"
            />
            <img
              className="sah-tilt__b"
              src={`${base}/physical-attendance-card-back.jpg`}
              alt="Attendance card back"
              width={1400}
              height={1050}
              loading="lazy"
            />
          </div>
        </section>

        <h3 className="sah-heading sah-figma">
          IF YOU&apos;RE CURIOUS, BROWSE THE FIGMA HERE:{' '}
          <a
            href="https://www.figma.com/design/pasrwNqBpI2vnezUhr7Jat/School---Home?node-id=0-1&t=Y7w2en1B3hcmdYqm-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open School at Home Figma file"
          >
            <img className="sah-figma__icon" src={`${base}/logo.png`} alt="" width={28} height={23} />
          </a>
        </h3>
      </div>

      <div className="sah-mobile-view">
        {/* mobile1.png: Copy 1 -> Music modes -> Copy 2 -> Mosaic 1 (Brainstorm arch vs Mozzarella + Brainstorm heading) */}
        <section className="sah-m1">
          <p className="sah-m-p1">
            My friend{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfi3SK1I-bbZifWfiGqAnty57rSMO4zfphAz8Mm5LGbzwbrpQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Alisa
            </a>{' '}
            runs a series of events titled School at home. The concept is that we are all
            professors and we are all students. Each event, there are around 5-6 lectures ranging
            from various areas. Some examples from the past are: the science of flirting, math as
            a language, music modes, and more.
          </p>

          <div className="sah-m-music-wrap">
            <img
              className="sah-m-music-img"
              src={`${base}/music-modes-class.jpg`}
              alt="Music modes class at School at Home"
              width={1400}
              height={1050}
              fetchPriority="high"
            />
          </div>

          <p className="sah-m-p2">
            As she sought to make these events more frequent and open to a larger audience, she
            realized that school at home needed a visual identity. Thus, I took on the role of
            Artistic Director of School at Home and got to work.
          </p>

          <div className="sah-m-mosaic-1">
            <div className="sah-m-mosaic-1__left">
              <img
                className="sah-arch sah-m-arch--brainstorm"
                src={`${base}/brainstorming.jpg`}
                alt="Brainstorming notes for School at Home"
                width={1050}
                height={1400}
                loading="lazy"
              />
            </div>
            <div className="sah-m-mosaic-1__right">
              <img
                className="sah-m-moz-img"
                src={`${base}/mozarella-class.jpg`}
                alt="Mozzarella class at School at Home"
                width={1050}
                height={1400}
                fetchPriority="high"
              />
              <h3 className="sah-heading sah-m-heading--brainstorm">
                BRAINSTORMING ON WHAT WE WANT IN THE VISUAL IDENTITY
              </h3>
            </div>
          </div>
        </section>

        {/* mobile2.png: Logo heading -> Logo paragraph -> Mosaic 2 (Kicker + Icon 1 vs Logo Arch + Icon 2) -> Attendance Heading */}
        <section className="sah-m2">
          <h3 className="sah-heading sah-m-heading--logo">
            THE FIRST ORDER OF ACTION WAS TO DESIGN A LOGO
          </h3>
          <p className="sah-m-p--logo">
            I focused on both words: SCHOOL and HOME. Icons that represent both school and home
            are buildings. What differentiates between the buildings? A clock is usually associated
            with school icons. A building with a chimney, windows, and a door is the usual icon for
            home.
          </p>

          <div className="sah-m-mosaic-2">
            <div className="sah-m-mosaic-2__left">
              <h3 className="sah-heading sah-m-kicker">
                NEXT, I WANTED TO CREATE A SET OF 5 CORE ICONS
              </h3>
              <img
                className="sah-m-icon-img sah-m-icon-img--1"
                src={`${base}/icon-planning-1.jpg`}
                alt="Icon planning sketches"
                width={1050}
                height={1400}
                loading="lazy"
              />
            </div>
            <div className="sah-m-mosaic-2__right">
              <img
                className="sah-arch sah-m-arch--logo"
                src={`${base}/logo-planning.jpg`}
                alt="Logo planning sketches"
                width={1400}
                height={1050}
                loading="lazy"
              />
              <img
                className="sah-m-icon-img sah-m-icon-img--2"
                src={`${base}/icon-planning-2.jpg`}
                alt="More icon planning sketches"
                width={1400}
                height={1050}
                loading="lazy"
              />
            </div>
          </div>

          <h3 className="sah-heading sah-m-heading--attendance">
            THEN, I FOCUSED ON DESIGNING AN ATTENDANCE STAMP CARD
          </h3>
        </section>

        {/* mobile3.png: Attendance Paragraph -> Staggered Cards (Card 1 + Brainstorming vs Stamp caption + Card 2) */}
        <section className="sah-m3">
          <p className="sah-m-p--attendance">
            The idea is that you receive a stamp on your attendance card for every school at home
            you attend. Every time you finish an attendance card by attending 8 school at homes, you
            receive a prize!
          </p>

          <div className="sah-m-stagger">
            <div className="sah-m-stagger__row1">
              <div className="sah-m-stagger__col-left">
                <img
                  className="sah-arch sah-m-stagger__arch-1"
                  src={`${base}/attendance-card-planning-1.jpg`}
                  alt="Attendance card layout sketches"
                  width={1400}
                  height={1050}
                  loading="lazy"
                />
              </div>
              <div className="sah-m-stagger__col-right">
                <h3 className="sah-heading sah-m-stagger__label">
                  BRAINSTORMING
                </h3>
              </div>
            </div>

            <div className="sah-m-stagger__row2">
              <div className="sah-m-stagger__col-left">
                <h3 className="sah-heading sah-m-stagger__caption">
                  I HAND CARVED A STAMP WITH THE SCHOOL@HOME LOGO
                </h3>
              </div>
              <div className="sah-m-stagger__col-right">
                <img
                  className="sah-arch sah-m-stagger__arch-2"
                  src={`${base}/attendance-card-planning-2.jpg`}
                  alt="Attendance card planning sketches"
                  width={1400}
                  height={1050}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* mobile4.png: Finale Heading -> Tilted Cards -> Note -> Figma */}
        <section className="sah-m4">
          <h3 className="sah-heading sah-m-heading--finale">
            THE FINAL PRODUCT
          </h3>

          <div className="sah-m-tilt">
            <img
              className="sah-m-tilt__a"
              src={`${base}/physical-attendance-card-front.jpg`}
              alt="Attendance card front"
              width={1400}
              height={1050}
              loading="lazy"
            />
            <img
              className="sah-m-tilt__b"
              src={`${base}/physical-attendance-card-back.jpg`}
              alt="Attendance card back"
              width={1400}
              height={1050}
              loading="lazy"
            />
          </div>

          <p className="sah-m-note">
            THERE&apos;S STILL MORE TO COME, ESPECIALLY WITH PEOPLE STARTING TO COMPLETE THEIR
            ATTENDANCE CARDS
          </p>

          <h3 className="sah-heading sah-m-figma">
            <span>IF YOU&apos;RE CURIOUS, BROWSE THE FIGMA HERE:</span>
            <a
              href="https://www.figma.com/design/pasrwNqBpI2vnezUhr7Jat/School---Home?node-id=0-1&t=Y7w2en1B3hcmdYqm-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open School at Home Figma file"
            >
              <img className="sah-figma__icon" src={`${base}/logo.png`} alt="" width={28} height={23} />
            </a>
          </h3>
        </section>
      </div>
    </article>
  );
}
