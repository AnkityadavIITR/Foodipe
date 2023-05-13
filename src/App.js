import { Route,  Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Search from "./components/Search";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";


function App() {
  return (
    <div className="App">
     <Search/>
     <Categories/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cuisine/:type" element={<Cuisine/>}></Route>
        <Route path="/searched/:search" element={<Searched/>}></Route>
        <Route path ="/recipe/:name" element={<Recipe/>}></Route>
      </Routes>
  
      </div>
  );
}

export default App;

