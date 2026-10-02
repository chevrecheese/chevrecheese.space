import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const leftLinks = [
  { to: '/s-creme', label: 'S.CRÈME' },
  {
    to: '/design',
    label: 'DESIGN',
    isActive: (_match, location) => location.pathname.startsWith('/design'),
  },
  { to: '/chainmaille', label: 'CHAINMAILLE' },
];

export default function Header() {
  const [navExpanded, setNavExpanded] = useState(false);

  const handleToggle = () => {
    setNavExpanded((current) => !current);
  };

  const closeNav = () => {
    setNavExpanded(false);
  };

  return (
    <header className="site-header">
      <nav
        className={`site-nav${navExpanded ? ' site-nav--expanded' : ''}`}
        aria-label="Main"
      >
        <button
          type="button"
          className="nav-accordion-toggle"
          aria-expanded={navExpanded}
          aria-controls="site-nav-menu"
          onClick={handleToggle}
        >
          §
        </button>

        <div className="nav-left" id="site-nav-menu">
          {leftLinks.map(({ to, label, isActive }) => (
            <NavLink
              key={to}
              to={to}
              end={!isActive}
              className={({ isActive: active }) =>
                `nav-link${active ? ' nav-link--active' : ''}`
              }
              onClick={closeNav}
              {...(isActive ? { isActive } : {})}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <NavLink to="/design" className="nav-logo" aria-label="Home" onClick={closeNav}>
          <img
            src="/assets/logo.png"
            alt="chevrecheese"
            width={800}
            height={597}
            fetchPriority="high"
          />
        </NavLink>

        <div className="nav-right">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link nav-link--about${isActive ? ' nav-link--active' : ''}`
            }
            onClick={closeNav}
          >
            ABOUT
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
