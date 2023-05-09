
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Category.scss";
import Products from "../Products/Products";
import Header from "../Header/Header";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const Category = () => {

    const { id } = useParams();

    const { data } = useFetch(`/api/products?populate=*&[filters] [categories] [id]=${id}`);

    return (
        <>
            <Header />
            <div className="category-main-content">
                <div className="layout">
                    <div className="category-title">
                        {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
                    </div>
                    <Products innerpage={true} products={data} />
                </div>
            </div>
            <Newsletter />
            <Footer />

        </>
    );
};

export default Category;
