import { useEffect } from 'react';

const base = '/assets/images/design/attn-ceremony';

export default function AttnCeremony() {
  useEffect(() => {
    document.body.classList.add('page-theme--design');
    return () => document.body.classList.remove('page-theme--design');
  }, []);

  return (
    <article className="page page--attn">
      <h1 className="attn-title">Attention Ceremony</h1>

      <section className="attn-stage" aria-label="Introduction">
        <p className="attn-copy attn-copy--intro">
          A few months back, my friend Alisa (the same friend who runs School at Home) ran her first
          retreat. The themes of this retreat were attention and ceremony. We explored giving and
          receiving attention, and the ceremony of it all.
        </p>

        <p className="attn-copy attn-copy--collab">
          After the retreat, I worked with another attendee, Mina, to design a zine to encapsulate
          our time there. We designed, trimmed, and hand-bound 9 zines for all attendees of the
          retreat.
        </p>

        <img
          className="attn-deco attn-deco--boat"
          src={`${base}/boat.png`}
          alt=""
          width={1400}
          height={764}
          loading="lazy"
        />
        <img
          className="attn-deco attn-deco--fly1"
          src={`${base}/dragonfly3.png`}
          alt=""
          width={448}
          height={627}
          loading="lazy"
        />
        <div className="attn-mid-deco">
          <img
            className="attn-deco attn-deco--fly2"
            src={`${base}/dragonfly2.png`}
            alt=""
            width={421}
            height={421}
            loading="lazy"
          />
          <img
            className="attn-deco attn-deco--tail-green"
            src={`${base}/isabelle.png`}
            alt=""
            width={1118}
            height={784}
            loading="lazy"
          />
          <img
            className="attn-deco attn-deco--tail-pink"
            src={`${base}/linh.png`}
            alt=""
            width={797}
            height={1178}
            loading="lazy"
          />
        </div>
        <img
          className="attn-deco attn-deco--tail-purple"
          src={`${base}/theo.png`}
          alt=""
          width={1145}
          height={959}
          loading="lazy"
        />

        <p className="attn-copy attn-copy--privacy">
          To respect everyone&apos;s privacy, here are some select shots from the zine
        </p>
      </section>

      <section className="attn-shots" aria-label="Zine photographs">
        <figure className="attn-shot attn-shot--1">
          <img
            src={`${base}/cover.jpeg`}
            alt="Attention Ceremony zine cover"
            width={1050}
            height={1400}
            loading="lazy"
          />
        </figure>
        <figure className="attn-shot attn-shot--2">
          <img
            src={`${base}/fruit-dance.jpeg`}
            alt="Zine spread with fruit collage"
            width={1400}
            height={1242}
            loading="lazy"
          />
          <img
            className="attn-deco attn-deco--fly3"
            src={`${base}/dragonfly1.png`}
            alt=""
            width={385}
            height={422}
            loading="lazy"
          />
        </figure>
        <figure className="attn-shot attn-shot--3">
          <img
            src={`${base}/back.jpeg`}
            alt="Zine spread with sticky notes"
            width={1050}
            height={1400}
            loading="lazy"
          />
        </figure>
        <figure className="attn-shot attn-shot--4">
          <img
            src={`${base}/mermaids.jpeg`}
            alt="Zine page with pond photograph"
            width={1241}
            height={1400}
            loading="lazy"
          />
        </figure>
      </section>

      <p className="attn-credit">
        Mina&apos;s IG:{' '}
        <a href="https://www.instagram.com/meenerssss/" target="_blank" rel="noreferrer">
          https://www.instagram.com/meenerssss/
        </a>
      </p>
    </article>
  );
}
