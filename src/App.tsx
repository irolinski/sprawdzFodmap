import { Navigate, Route, Routes } from 'react-router-dom'
import Demo from './Demo';
import { Diet } from './pages/Diet';

function App() {
  return (
    <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/recipes" element={<h1>Recipes</h1>} />
      <Route path="/recipes/:id">
        <Route index element={<h1>Show page</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
      <Route path="*" element={ <Navigate to="/" />} />
    </Routes>
  );
}

export default App;
