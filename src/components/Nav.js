import React from "react";
import { Route, NavLink, Link } from "react-router-dom";

const menus = [
  {
    name: "Menu 1",
    to: "/demomenu/demomenu1",
    exact: true,
  },
  {
    name: "Menu 2",
    to: "/demomenu/demomenu2",
    exact: false,
  },
  {
    name: "Menu 3",
    to: "/demomenu/demomenu3",
    exact: false,
  },
  {
    name: "Products",
    to: "/products",
    exact: false,
  },
  {
    name: "Login",
    to: "/login",
    exact: false,
  },
];

// Custom Link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={`myClass ${active}`}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/">
          React
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              {/* Dùng NavLink thay Link vì nó sẽ nhận diện link đang được chọn */}
              <NavLink
                className="nav-link"
                activeStyle={{ color: "red" }}
                // Kích hoạt link thì thêm style này
                exact
                // Thêm thuộc tính này để nhận diện đúng link kích hoạt
                to="/"
                // Thay href bằng to
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                // Kích hoạt link thì thêm class này - class mặc định của Bootstrap 4
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="myStyle"
                // Kích hoạt link thì thêm class này - thêm style cho class trong file App.css
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            {showMenus(menus)}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

const showMenus = (menus) => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        />
      );
    });
  }
  return result;
};

export default Nav;
