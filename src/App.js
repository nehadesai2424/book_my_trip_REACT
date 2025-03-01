import HeaderFile from './components/HeaderFile'
import HomeFile from './components/HomeFile';
import AboutFile from './components/AboutFile';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import ContactFile from './components/ContactFile';
import Reviews from './components/Reviews';
import FooterFile from './components/FooterFile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import 'animate.css'

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <HeaderFile />
        <Routes>
          <Route path={'/'} element={<HomeFile></HomeFile>}></Route>
          <Route path={'/about'} element={<AboutFile></AboutFile>}></Route>
          <Route path={'/destinations'} element={<Destinations></Destinations>}></Route>
          <Route path={'/packages'} element={<Packages></Packages>}></Route>
          <Route path={'/contact'} element={<ContactFile></ContactFile>}></Route>
          <Route path={'/reviews'} element={<Reviews></Reviews>}></Route>
        </Routes>
        <FooterFile />
      </BrowserRouter>

    </div>
  );
}

export default App;
