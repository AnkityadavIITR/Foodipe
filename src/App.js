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

//in app we don't want to cluster all the pages component because it will be many lines so wo already 
//render all these files in "Pages.jsx" inside Pages.jsx and then import "Pages.jsc inside app.js"

//* in react to navigate to different page we use react "Routes in App.js"

//but to use react routes we first add "<BrowserRouter> in index.js and wrapp the whole app inside browserouter"

//here path in routes are taken from "to={}" and it dircts it to route path and then it render the element