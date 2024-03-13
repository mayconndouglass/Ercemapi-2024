import { Routes, Route } from 'react-router-dom';

// Main Menu
import { MainHeader } from '../layout/MainHeader'
import { Home } from '../pages/Home';
import { ProgramCommittee } from '../pages/ProgramCommittee';
import { About } from '../pages/About';
import { Organization } from '../pages/Organization';
import { Workshops } from '../pages/Workshops';
import { PrototypeHall } from '../pages/PrototypeHall';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route path="/" element={<Home />} />

        <Route path="/evento/comite-de-programa" element={<ProgramCommittee />} />
        <Route path="/evento/sobre" element={<About />} />
        <Route path="/evento/organizacao" element={<Organization />} />

        <Route path="/chamadas/minicursos" element={<Workshops />} />
        <Route path="/chamadas/salao-de-prototipos" element={<PrototypeHall />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
