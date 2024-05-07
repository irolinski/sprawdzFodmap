
import { Route, Routes } from 'react-router-dom';

import Homepage from './Pages/Home.tsx';
import Tables from './Pages/Tabele/Fodmap.tsx';
import HIT_Chart from './Pages/Tabele/HIT.tsx';
import Info  from './Pages/Info/About.tsx';
import Progress  from './Pages/Info/Progress.tsx';


import './App.scss';


export default function App() {
    return(
        <>
        <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/fodmap' element={<Tables />} />
                <Route path='/hit' element={<HIT_Chart />} />
                <Route path='/o-nas' element={<Info />} />
                <Route path='/rozwoj' element={<Progress />} />
        </Routes>
        </>
    )
}