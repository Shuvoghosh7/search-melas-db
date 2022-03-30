import logo from './logo.svg';
import './App.css';
import Restaurant from './Component/Restaurant/Restaurant';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
      Hello world!
    
    </h1>
    <Routes>
      <Route path='/rstaurant' element={<Restaurant/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
