import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.body.classList.add('page-theme--about');
    return () => document.body.classList.remove('page-theme--about');
  }, []);

  return (
    <article className="page page--about">
      <div className="about-layout">
        <div className="about-main">
          <div className="about-photo-wrap">
            <img
              className="about-photo-frame"
              src="/assets/images/about/frame_1.png"
              alt=""
              width={535}
              height={415}
              fetchPriority="high"
            />
            <img
              className="about-photo"
              src="/assets/images/about/shev-softserve.png"
              alt="Shevonne with a soft serve sculpture"
              width={1050}
              height={1400}
              fetchPriority="high"
            />
          </div>

          <div className="about-copy">
            <p>Hi, I&apos;m Shevonne.</p>
            <p>
              I&apos;m a software engineer, artist, and all around creative based in NYC. My
              background is in traditional art, ranging from watercolour, acrylic, to even
              book-binding. Recently, I&apos;ve been taking on design commissions, and refining
              those skills.
            </p>
            <p>
              I&apos;m extremely passionate about soft serve ice cream, and have been designing and
              building an app related to that. You can{' '}
              <Link to="/s-creme">read more about that here</Link>.
            </p>
            <p>
              I also create chainmaille pieces, including the veil and matching tie from my wedding
              earlier this year.
            </p>
            <p>
              I&apos;m currently looking for a full-time software engineer role. I&apos;m open and
              excited for all opportunities that will let me exercise my creative and technical
              skills.
            </p>
          </div>
        </div>

        <div className="about-meta">
          <p className="about-contact-line">
            <span className="about-contact-label">Contact:</span>{' '}
            <a href="mailto:shevonne.liudaw@gmail.com">shevonne.liudaw@gmail.com</a>
          </p>
          <div className="about-social">
            <a
              href="https://github.com/chevrecheese"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img src="/assets/images/about/github.png" alt="" width={48} height={48} loading="lazy" />
            </a>
            <a
              href="https://www.instagram.com/chevrecheese/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/assets/images/about/instagram.png"
                alt=""
                width={48}
                height={48}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
