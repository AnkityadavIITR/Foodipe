import { Route,  Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Pages from "./pages/Pages";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Categories/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cuisine/:type" element={<Cuisine/>}></Route>
      </Routes>
  
      </div>
  );
}

export default App;

//in app we don't want to cluster all the pages component because it will be many lines so wo already 
//render all these files in "Pages.jsx" inside Pages.jsx and then import "Pages.jsc inside app.js"

//* in react to navigate to different page we use react "Routes in App.js"

//but to use react routes we first add "<BrowserRouter> in index.js and wrapp the whole app inside browserouter"