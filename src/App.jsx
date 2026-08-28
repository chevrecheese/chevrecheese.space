import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import DesignHome from './pages/DesignHome.jsx';
import SchoolAtHome from './pages/SchoolAtHome.jsx';
import AttnCeremony from './pages/AttnCeremony.jsx';
import SCreme from './pages/SCreme.jsx';
import Chainmaille from './pages/Chainmaille.jsx';
import About from './pages/About.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/design" replace />} />
        <Route path="design" element={<DesignHome />} />
        <Route path="design/school-at-home" element={<SchoolAtHome />} />
        <Route path="design/attn-ceremony" element={<AttnCeremony />} />
        <Route path="s-creme" element={<SCreme />} />
        <Route path="chainmaille" element={<Chainmaille />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/design" replace />} />
      </Route>
    </Routes>
  );
}
