import { useEffect } from 'react';

const items = [
  {
    type: 'image',
    src: '1_couple-wearing-chainmaille-veil-and-bolo-tie.jpg',
    alt: 'couple wearing chainmaille veil and bolo tie',
    width: 928,
    height: 1400,
  },
  {
    type: 'image',
    src: '2_chainmaille-necklace-on-neck.jpg',
    alt: 'chainmaille necklace on neck',
    width: 1400,
    height: 910,
  },
  {
    type: 'image',
    src: '3_captive-pearl-on-cloth.jpg',
    alt: 'captive pearl on cloth',
    width: 1400,
    height: 1050,
  },
  {
    type: 'image',
    src: '4_groom-fixing-chainmaille-veil-on-bride.jpg',
    alt: 'groom fixing chainmaille veil on bride',
    width: 1059,
    height: 1400,
  },
  {
    type: 'image',
    src: '5_veil-hat-side.jpg',
    alt: 'veil hat side',
    width: 1400,
    height: 1050,
  },
  {
    type: 'image',
    src: '6_chainmaille-cat-bat.jpg',
    alt: 'chainmaille cat bat',
    width: 1400,
    height: 1050,
  },
  {
    type: 'image',
    src: '7_bolo-tie-on-cloth.jpg',
    alt: 'bolo tie on cloth',
    width: 1309,
    height: 1400,
  },
  {
    type: 'image',
    src: '8_chainmaille-necklace-on-cloth.jpg',
    alt: 'chainmaille necklace on cloth',
    width: 1400,
    height: 1050,
  },
  {
    type: 'video',
    src: '/assets/videos/chainmaille.mov',
    poster: '/assets/images/chainmaille/video-poster.jpg',
    alt: 'captive pearl chainmaille video',
  },
  {
    type: 'image',
    src: '10_veil-front-shot.jpg',
    alt: 'veil front shot',
    width: 1400,
    height: 932,
  },
  {
    type: 'image',
    src: '11_chainmaille-veil.png',
    alt: 'chainmaille veil',
    width: 928,
    height: 1400,
  },
];

export default function Chainmaille() {
  useEffect(() => {
    document.body.classList.add('page-theme--chainmaille');
    return () => document.body.classList.remove('page-theme--chainmaille');
  }, []);

  return (
    <section className="page page--chainmaille">
      <div className="chainmaille-gallery">
        {items.map((item, index) =>
          item.type === 'video' ? (
            <figure key={item.src} className="chainmaille-gallery__item chainmaille-gallery__item--video">
              <video
                controls
                playsInline
                preload="metadata"
                poster={item.poster}
                aria-label={item.alt}
              >
                <source src={item.src} type="video/quicktime" />
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </figure>
          ) : (
            <figure key={item.src} className="chainmaille-gallery__item">
              <img
                src={`/assets/images/chainmaille/${item.src}`}
                alt={item.alt}
                width={item.width}
                height={item.height}
                {...(index === 0
                  ? { fetchPriority: 'high' }
                  : { loading: 'lazy' })}
              />
            </figure>
          )
        )}
      </div>
    </section>
  );
}
