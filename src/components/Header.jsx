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
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        <div className="nav-left">
          {leftLinks.map(({ to, label, isActive }) => (
            <NavLink
              key={to}
              to={to}
              end={!isActive}
              className={({ isActive: active }) =>
                `nav-link${active ? ' nav-link--active' : ''}`
              }
              {...(isActive ? { isActive } : {})}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <NavLink to="/design" className="nav-logo" aria-label="Home">
          <img src="/assets/logo.png" alt="chevrecheese" />
        </NavLink>

        <div className="nav-right">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link nav-link--about${isActive ? ' nav-link--active' : ''}`
            }
          >
            ABOUT
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
