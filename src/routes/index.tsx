import { Routes, Route } from 'react-router-dom';

// Main Menu
import { MainHeader } from '../layout/MainHeader'
import { Home } from '../pages/Home';
import { ProgramCommittee } from '../pages/ProgramCommittee';
import { About } from '../pages/About';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/comite-de-programa" element={<ProgramCommittee />} />
        <Route path="/sobre" element={<About />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
