import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import DemoMenu1 from "./components/DemoMenu/DemoMenu1";
import DemoMenu2 from "./components/DemoMenu/DemoMenu2";
import DemoMenu3 from "./components/DemoMenu/DemoMenu3";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/demomenu/demomenu1",
    exact: false,
    main: () => <DemoMenu1 />,
  },
  {
    path: "/demomenu/demomenu2",
    exact: false,
    main: () => <DemoMenu2 />,
  },
  {
    path: "/demomenu/demomenu3",
    exact: false,
    main: () => <DemoMenu3 />,
  },
  {
    path: "/Products",
    exact: false,
    main: ({ location, match }) => (
      <Products location={location} match={match} />
    ),
  },
  {
    path: "/Login",
    exact: false,
    main: ({ location }) => <Login location={location} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
export default routes;
