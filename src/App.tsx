import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Album } from "./components/Album";
import { Extra } from "./components/Extra";
import { Home } from "./components/Home";
import { SideBar } from "./components/SideBar";
import { Services } from "./components/Services";
import { BtnPull } from "./components/BtnPull";
import { useEffect, useRef, useState } from "react";

function App() {
  const routesList = [
    { path: "/", element: <Home /> },
    { path: "/album", element: <Album /> },
    { path: "/services", element: <Services /> },
    { path: "/extra", element: <Extra /> },
  ];
  const refContainer = useRef<HTMLDivElement>(null);

  const [showSideBar, setShowSideBar] = useState(false);

  const handleShowSideBar = () => {
    /*   document.getElementsByClassName() */
    if (refContainer != null) {
      var container = refContainer.current;
      /*  var navBar = container?.getElementsByClassName("container-sidebar");
      console.log(navBar);
      if(navBar.classList.contains('')) */
    }
  };

  useEffect(() => {
    handleShowSideBar();
  }, []);

  return (
    <HashRouter>
      <div className="container" ref={refContainer}>
        <SideBar />
        <BtnPull /* onClick={} */ />
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
