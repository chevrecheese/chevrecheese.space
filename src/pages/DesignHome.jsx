import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from '../components/Lightbox.jsx';

const projects = [
  {
    type: 'link',
    to: '/design/school-at-home',
    src: '/assets/images/design/school-at-home-thumb.png',
    alt: 'School at Home visual identity',
    width: 784,
    height: 1099,
  },
  {
    type: 'link',
    to: '/design/attn-ceremony',
    src: '/assets/images/design/attn-ceremony-thumb.png',
    alt: 'Attention Ceremony zine',
    width: 1216,
    height: 1214,
  },
  {
    type: 'lightbox',
    src: '/assets/images/design/john-shannon-evite.png',
    alt: 'John and Shannon wedding evite',
    width: 998,
    height: 1400,
  },
];

export default function DesignHome() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    document.body.classList.add('page-theme--design');
    return () => document.body.classList.remove('page-theme--design');
  }, []);

  return (
    <section className="page page--design-home">
      <div className="design-grid">
        {projects.map((project, index) => {
          const content = (
            <img
              src={project.src}
              alt={project.alt}
              className="design-grid__image"
              width={project.width}
              height={project.height}
              {...(index === 0
                ? { fetchPriority: 'high' }
                : { loading: 'lazy' })}
            />
          );

          if (project.type === 'link') {
            return (
              <Link key={project.src} to={project.to} className="design-grid__item">
                {content}
              </Link>
            );
          }

          return (
            <button
              key={project.src}
              type="button"
              className="design-grid__item design-grid__item--button"
              onClick={() => setLightboxSrc(project.src)}
            >
              {content}
            </button>
          );
        })}
      </div>

      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt="John and Shannon wedding evite"
          width={998}
          height={1400}
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </section>
  );
}
