function Figure({ src, alt, width, height }) {
  return (
    <figure className="case-figure">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
    </figure>
  );
}

export default function AttnCeremony() {
  const base = '/assets/images/design/attn-ceremony';

  return (
    <article className="page page--case-study">
      <header className="case-header">
        <h1>Attention Ceremony</h1>
        <p className="case-lead">
          A few months back, my friend Alisa (the same friend who runs School at Home) ran her
          first retreat. The themes of this retreat were attention and ceremony. We explored giving
          and receiving attention, and the ceremony of it all.
        </p>
        <p>
          After the retreat, I worked with another attendee, Mina, to design a zine to encapsulate
          our time there. We designed, trimmed, and hand-bound 9 zines for all attendees of the
          retreat.
        </p>
        <p>To respect everyone&apos;s privacy, here are some select shots from the zine.</p>
      </header>

      <div className="gallery-grid">
        <Figure
          src={`${base}/ceremony-cover-and-back.png`}
          alt="Ceremony zine cover and back"
          width={1216}
          height={1214}
        />
        <Figure
          src={`${base}/from_selection-3.png`}
          alt="Zine spread selection"
          width={385}
          height={422}
        />
        <Figure
          src={`${base}/from_selection-4.png`}
          alt="Zine spread selection"
          width={421}
          height={421}
        />
        <Figure src={`${base}/layer_8.png`} alt="Zine detail" width={448} height={627} />
        <Figure src={`${base}/layer_9.png`} alt="Zine detail" width={1400} height={764} />
        <Figure src={`${base}/img_5475.jpeg`} alt="Zine photograph" width={1400} height={1050} />
        <Figure src={`${base}/img_5476.jpeg`} alt="Zine photograph" width={1400} height={1050} />
        <Figure src={`${base}/img_5477.jpeg`} alt="Zine photograph" width={1400} height={1241} />
        <Figure src={`${base}/img_5478.jpeg`} alt="Zine photograph" width={1241} height={1400} />
      </div>

      <p className="case-credit">
        Collaborator:{' '}
        <a href="https://www.instagram.com/meenerssss/" target="_blank" rel="noreferrer">
          Mina
        </a>
      </p>
    </article>
  );
}
