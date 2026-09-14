import { useEffect } from 'react';

const base = '/assets/images/s-creme';

/* Midline ~80, amplitude ±34 — room above peaks for 42px rotated glyphs in viewBox. */
const SCREME_WAVE =
  'M0,80 C120,46 220,114 340,80 S560,46 680,80 920,114 1040,80 1280,46 1400,80';

/**
 * Marquee spacing (baked into MARQUEE_STARS; recompute if SCREME_WAVE / type change):
 * WAVE_PATH_LENGTH ≈ 1417.433. Per cell, measure visual ink end of "S.CRÈME" and start of
 * the next repeat along the path; place the star near the gap midpoint so left/right ink
 * gutters match (~16–19px with letter-spacing -0.058em; wave curvature varies the gap).
 * A constant cellStart+inkEnd formula left stars too close to E on steeper segments — those
 * keyPoints sit slightly later along the path. rotate = path tangent atan2(dy,dx).
 * Stars are then nudged ~15px along the path normal toward the text ascent so their
 * centers align with the visual midline of the textPath glyphs (not the baseline).
 */
const STAR_SIZE = 30;
const MARQUEE_REPEATS = 5;

const MARQUEE_TEXT_OFFSETS = Array.from(
  { length: MARQUEE_REPEATS },
  (_, i) => `${(i * 100) / MARQUEE_REPEATS}%`,
);
const MARQUEE_STARS = [
  { x: 250.35, y: 74.43, rotate: 2.68 },
  { x: 528.64, y: 39.82, rotate: 1.95 },
  { x: 809.29, y: 88.43, rotate: 4.66 },
  { x: 1084.83, y: 53.55, rotate: -11.73 },
  { x: 1373.43, y: 57.61, rotate: 13.3 },
];
/** Two identical segments → CSS translateX(-50%) loops seamlessly. */
const MARQUEE_SEGMENTS = [0, 1];

function ScremeMarqueeSegment({ segmentId }) {
  const waveId = `screme-wave-${segmentId}`;
  const filterId = `screme-star-brown-${segmentId}`;

  return (
    <svg
      className="screme-marquee__svg"
      viewBox="0 0 1400 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id={waveId} d={SCREME_WAVE} />
        {/* Recolor opaque orange star.png pixels to site brown #554B3C; keep alpha */}
        <filter
          id={filterId}
          colorInterpolationFilters="sRGB"
          x="0"
          y="0"
          width="100%"
          height="100%"
        >
          <feColorMatrix
            type="matrix"
            values="0 0 0 0.333333 0
                    0 0 0 0.294118 0
                    0 0 0 0.235294 0
                    0 0 0 1 0"
          />
        </filter>
      </defs>
      <text className="screme-marquee__text">
        {MARQUEE_TEXT_OFFSETS.map((offset) => (
          <textPath key={offset} href={`#${waveId}`} startOffset={offset}>
            S.CRÈME
          </textPath>
        ))}
      </text>
      {MARQUEE_STARS.map(({ x, y, rotate }) => (
        <image
          key={x}
          className="screme-marquee__star"
          href={`${base}/star.png`}
          width={STAR_SIZE}
          height={STAR_SIZE}
          x={x - STAR_SIZE / 2}
          y={y - STAR_SIZE / 2}
          transform={`rotate(${rotate} ${x} ${y})`}
          filter={`url(#${filterId})`}
        />
      ))}
    </svg>
  );
}

export default function SCreme() {
  useEffect(() => {
    document.body.classList.add('page-theme--screme');
    return () => document.body.classList.remove('page-theme--screme');
  }, []);

  return (
    <article className="page page--screme">
      <section className="screme-intro">
        <div className="screme-marquee" aria-hidden="true">
          <div className="screme-marquee__track">
            {MARQUEE_SEGMENTS.map((id) => (
              <ScremeMarqueeSegment key={id} segmentId={id} />
            ))}
          </div>
        </div>

        <h1 className="screme-mobile-title">
          <span aria-hidden="true">★</span>
          S.CRÈME
          <span aria-hidden="true">★</span>
        </h1>

        <div className="screme-intro__grid">
          <p className="screme-copy screme-copy--p1">
            I have been a soft serve ice cream fanatic since childhood. To emphasize,
            specifically soft serve, not &ldquo;hard&rdquo; ice cream. Since moving to NYC,
            I&apos;ve noticed that there are a lot of places that offer soft serve seasonally,
            and not just ice cream shops. You&apos;ll find really interesting good quality soft
            serve at some speakeasies!
          </p>

          <div className="screme-collage">
            <img
              className="screme-collage__img screme-collage__img--a"
              src={`${base}/cafe.png`}
              alt="Soft serve in a glass cup beside a camera"
              width={793}
              height={1400}
              fetchPriority="high"
            />
            <img
              className="screme-collage__img screme-collage__img--b"
              src={`${base}/lisbonata.png`}
              alt="Soft serve cup with toppings from Lisbonata"
              width={1400}
              height={1050}
              fetchPriority="high"
            />
            <img
              className="screme-collage__img screme-collage__img--c"
              src={`${base}/osulloc.png`}
              alt="Soft serve swirl on cake outdoors"
              width={1050}
              height={1400}
              loading="lazy"
            />
          </div>

          <p className="screme-copy screme-copy--p2">
            There are many Instagram food accounts that seem to share this passion for soft
            serve, but there&apos;s no comprehensive list for all the soft serve that NYC has to
            offer. A list like that would have to be updated relatively frequently. As someone
            who maintains many bookmarks on Google Maps sorted into food categories, this got me
            thinking: how is there no better way to map out all places that offer soft serve and
            also share that with others? I also want other people&apos;s recommendations as well.
          </p>

          <h2 className="screme-lead">
            Enter s.crème:
            <br className="screme-lead__br screme-lead__br--mobile" />{' '}
            a soft-serve app
            <br className="screme-lead__br screme-lead__br--desktop" />{' '}
            for
            <br className="screme-lead__br screme-lead__br--mobile" />{' '}
            the people by the people
          </h2>
        </div>

        <p className="screme-copy screme-copy--vision">
          The vision for this app is simple: users should be able to review any business that
          offers soft serve. The review will be structured by the 5 qualities that I believe are
          essential to the soft serve experience™. The qualities are as follows: sweetness,
          creaminess, flavours, cones, naturalness.
        </p>
      </section>

      <section className="screme-product">
        <div className="screme-product__rank">
          <div className="screme-mockup-pair">
            <img
              src={`${base}/add-review-page-mockup.png`}
              alt="App mockup: ranking soft-serve qualities for Indigo Cow"
              width={402}
              height={874}
              loading="lazy"
            />
            <img
              src={`${base}/add-review-page-mockup2.png`}
              alt="App mockup: adding a photo and written review"
              width={402}
              height={874}
              loading="lazy"
            />
          </div>
          <p className="screme-copy screme-copy--rank">
            The user is asked to rank each quality out of 5. The user can also leave a detailed
            review and photos.
          </p>
        </div>

        <div className="screme-product__radar">
          <div className="screme-product__radar-copy">
            <p className="screme-copy">
              On each business&apos;s page, a radar chart will be created with the average of the
              rankings of the 5 qualities.
            </p>
            <p className="screme-copy">
              If the business hasn&apos;t been added already to the app, then the user can add it.
            </p>
          </div>
          <img
            className="screme-mockup-solo"
            src={`${base}/business-page---many-reviews-mockup.png`}
            alt="App mockup: Indigo Cow business page with radar chart"
            width={402}
            height={874}
            loading="lazy"
          />
        </div>

        <div className="screme-figma">
          <p className="screme-copy screme-copy--figma">
            APP IS STILL A WIP, BUT TAKE A PEEK AT THE DESIGN ON FIGMA:
          </p>
          <img
            className="screme-figma__icon"
            src={`${base}/s.creme-app-icon.png`}
            alt="s.crème app icon"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
      </section>
    </article>
  );
}
