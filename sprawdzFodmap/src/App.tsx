
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Home.tsx'

export default function App() {
    return(
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/tables' element={<h1>Tables page</h1>} />
        </Routes>
    )
}