import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Album } from "./components/Album";
import { Extra } from "./components/Extra";
import { Home } from "./components/Home";
import { SideBar } from "./components/SideBar";
import { Services } from "./components/Services";

function App() {
  const routesList = [
    { path: "/", element: <Home /> },
    { path: "/album", element: <Album /> },
    { path: "/services", element: <Services /> },
    { path: "/extra", element: <Extra /> },
  ];

  return (
    <HashRouter>
      <div className="container">
        <SideBar />
        <Routes>
          {routesList.map((route, index) => {
            return (
              <Route path={route.path} element={route.element} key={index} />
            );
          })}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
