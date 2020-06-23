import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  function showContentMenus(routes) {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.main}
          />
        );
      });
    }
    return result;
  }

  return (
    <Router>
      <div>
        {/* Menu */}
        <Nav />
        {/* Nội dung */}
        <div className="container">
          <Switch>{showContentMenus(routes)}</Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
