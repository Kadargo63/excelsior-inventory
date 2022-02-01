import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
  return (
    <div className="container" >
      <div className="content">
        <div className="left-column">
          <Jumbotron />
          <CategoryMenu />
        </div>
        <div className="right-column">
          <ProductList />
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Home;
