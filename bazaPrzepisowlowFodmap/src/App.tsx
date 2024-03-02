import { Navigate, Route, Routes } from 'react-router-dom'
import RecipesList from './pages/recipes/RecipesList';
import RecipesAdd from './pages/recipes/RecipesAdd';
import TagsInput from './components/utils/TagsT';
import Demo from './pages/recipes/Demo';


function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/demo" element={<Demo /> }/>
      <Route path="/recipes" element={<RecipesList />} />
      <Route path="/recipes/add" element={<RecipesAdd />} />
      <Route path="/recipes/:id">
        <Route index element={<h1>Show page</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
      <Route path="*" element={ <Navigate to="/" />} />
    </Routes>
  );
}

export default App;
