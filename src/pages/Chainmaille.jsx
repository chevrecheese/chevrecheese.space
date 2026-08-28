import { useEffect } from 'react';

export default function Chainmaille() {
  useEffect(() => {
    document.body.classList.add('page-theme--dark');
    return () => document.body.classList.remove('page-theme--dark');
  }, []);

  return (
    <section className="page page--chainmaille">
      <video
        className="chainmaille-video"
        controls
        playsInline
        preload="metadata"
        poster="/assets/images/chainmaille-poster.jpg"
      >
        <source src="/assets/videos/chainmaille.mov" type="video/quicktime" />
        <source src="/assets/videos/chainmaille.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
