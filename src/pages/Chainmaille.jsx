import { useEffect } from 'react';

const items = [
  { type: 'image', src: '000006140028.jpg', alt: 'Chainmaille piece' },
  { type: 'image', src: 'img_5455.jpg', alt: 'Chainmaille piece' },
  { type: 'image', src: 'img_5489.jpg', alt: 'Chainmaille piece' },
  { type: 'image', src: 'img_5464.jpg', alt: 'Chainmaille piece' },
  { type: 'image', src: 'jonathan-shevonne-1.jpg', alt: 'Wedding chainmaille veil' },
  { type: 'image', src: 'img_5465.jpg', alt: 'Chainmaille piece' },
  { type: 'image', src: 'img_5471.jpg', alt: 'Chainmaille piece' },
  { type: 'image', src: 'img_5466.jpg', alt: 'Chainmaille piece' },
  { type: 'image', src: 'img_5467.jpg', alt: 'Chainmaille piece' },
  { type: 'video', src: '/assets/videos/chainmaille.mov', poster: '/assets/images/chainmaille/video-poster.jpg' },
  { type: 'image', src: 'jonathan-shevonne-2.jpg', alt: 'Wedding chainmaille details' },
  { type: 'image', src: 'jonathan-shevonne.jpg', alt: 'Wedding chainmaille' },
  { type: 'image', src: 'img_5474.jpg', alt: 'Chainmaille piece' },
];

export default function Chainmaille() {
  useEffect(() => {
    document.body.classList.add('page-theme--chainmaille');
    return () => document.body.classList.remove('page-theme--chainmaille');
  }, []);

  return (
    <section className="page page--chainmaille">
      <div className="chainmaille-gallery">
        {items.map((item) =>
          item.type === 'video' ? (
            <figure key={item.src} className="chainmaille-gallery__item chainmaille-gallery__item--video">
              <video controls playsInline preload="metadata" poster={item.poster}>
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
                loading="lazy"
              />
            </figure>
          )
        )}
      </div>
    </section>
  );
}
