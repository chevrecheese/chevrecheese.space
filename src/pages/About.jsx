import { Link } from 'react-router-dom';

export default function About() {
  return (
    <article className="page page--about">
      <div className="about-content">
        <p>Hi, I&apos;m shevonne.</p>
        <p>
          I&apos;m a software engineer, artist, and all around creative based in NYC. My background
          is in traditional art, ranging from watercolour, acrylic, to even book-binding. Recently,
          I&apos;ve been taking on design commissions, and refining those skills.
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
          excited for all opportunities that will let me exercise my creative and technical skills.
        </p>

        <div className="about-contact">
          <p>
            <a href="mailto:shevonne.liudaw@gmail.com">shevonne.liudaw@gmail.com</a>
          </p>
          <p>
            <a href="https://github.com/chevrecheese" target="_blank" rel="noreferrer">
              github.com/chevrecheese
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/chevrecheese/" target="_blank" rel="noreferrer">
              instagram.com/chevrecheese
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
