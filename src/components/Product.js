import React from "react";

function Product(props) {
  let { match } = props;
  let slug = match.params.slug;
  console.log(slug);

  return <div>This is my product page : {slug}</div>;
}

export default Product;
