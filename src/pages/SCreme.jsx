function Figure({ src, alt, caption, width, height }) {
  return (
    <figure className="case-figure">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function SCreme() {
  const base = '/assets/images/s-creme';

  return (
    <article className="page page--case-study page--screme">
      <header className="case-header">
        <div className="screme-hero">
          <img
            src={`${base}/s.creme-app-icon.png`}
            alt="s.crème app icon"
            className="screme-hero__icon"
            width={500}
            height={500}
            fetchPriority="high"
          />
          <h1>s.crème</h1>
        </div>
        <p>
          I have been a soft serve ice cream fanatic since childhood. To emphasize, specifically
          soft serve, not &ldquo;hard&rdquo; ice cream. Since moving to NYC, I&apos;ve noticed that
          there are a lot of places that offer soft serve seasonally, and not just ice cream shops.
          You&apos;ll find really interesting good quality soft serve at some speakeasies!
        </p>
        <p>
          There are many Instagram food accounts that seem to share this passion for soft serve, but
          there&apos;s no comprehensive list for all the soft serve that NYC has to offer. A list
          like that would have to be updated relatively frequently. As someone who maintains many
          bookmarks on Google Maps sorted into food categories, this got me thinking: how is there
          no better way to map out all places that offer soft serve and also share that with others?
          I also want other people&apos;s recommendations as well.
        </p>
        <p className="case-lead">
          Enter s.crème: a soft-serve app for the people by the people.
        </p>
      </header>

      <section className="case-section">
        <p>
          The vision for this app is simple: users should be able to review any business that offers
          soft serve. The review will be structured by the 5 qualities that I believe are essential
          to the soft serve experience™. The qualities are as follows: sweetness, creaminess,
          flavours, cones, naturalness.
        </p>
        <p>
          The user is asked to rank each quality out of 5. The user can also leave a detailed review
          and photos.
        </p>
        <p>
          On each business&apos;s page, a radar chart will be created with the average of the
          rankings of the 5 qualities.
        </p>
        <p>
          If the business hasn&apos;t been added already to the app, then the user can add it.
        </p>
      </section>

      <div className="screme-mockups">
        <Figure
          src={`${base}/business-page---many-reviews-mockup.png`}
          alt="Business page mockup with reviews"
          width={402}
          height={874}
        />
        <Figure
          src={`${base}/add-review-page-mockup.png`}
          alt="Add review page mockup"
          width={402}
          height={874}
        />
        <Figure
          src={`${base}/add-review-page-mockup2.png`}
          alt="Add review page mockup variant"
          width={402}
          height={874}
        />
        <Figure
          src={`${base}/softserve.png`}
          alt="Soft serve illustration"
          width={793}
          height={1400}
        />
      </div>

      <p className="case-note">App is still a WIP. Figma link coming soon.</p>
    </article>
  );
}
