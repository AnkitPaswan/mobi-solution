import { useEffect, useContext } from "react";
import "./Home.scss";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Header from "../Header/Header";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const Home = () => {

  const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then(res => {
      console.log(res);
      setProducts(res);
    });
  }

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then(res => {
      console.log(res);
      setCategories(res);
    });
  }


  return (
    <>
      <Header />
      <div className="home" >
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category categories={categories} />
            <Products products={products} headingText="Popular Product" />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
