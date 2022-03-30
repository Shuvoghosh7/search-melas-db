import logo from './logo.svg';
import './App.css';
import Restaurant from './Component/Restaurant/Restaurant';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Header/Header';
import MealDetails from './Component/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/rstaurant' element={<Restaurant/>}></Route>
      <Route path='/rstaurant/:mealdb' element={<MealDetails/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
