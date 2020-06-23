import React from "react";
import { NavLink, Route } from "react-router-dom";
import Product from "./Product";

function Products(props) {
  let products = [
    {
      id: 1,
      name: "iPhone",
      slug: "iphone",
      price: 100,
    },
    {
      id: 2,
      name: "Samsung",
      slug: "samsung",
      price: 80,
    },
    {
      id: 3,
      name: "Oppo",
      slug: "opo",
      price: 60,
    },
  ];

  var { location } = props;
  // console.log(location);
  var { match } = props;
  // console.log(match);

  let url = match.url;

  let result = products.map((product, index) => {
    return (
      <NavLink to={`${url}/${product.slug}`} key={index}>
        <li className="list-group-item">
          {product.id} - {product.name} - {product.price}
        </li>
      </NavLink>
    );
  });
  return (
    <div className="container">
      <ul className="list-group mt-5 mb-5">{result}</ul>
      <Route path="/products/:slug" component={Product} />
    </div>
  );
}

export default Products;
