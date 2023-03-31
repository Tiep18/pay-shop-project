import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import categoriesApi from "../../../api/categoriesApi";
import Item from "../../Products/Item";
import Sidebar from "../../Sidebar/Sidebar";

function Collection() {
    const { pathname } = useLocation();
    const nameCollection = pathname.split("/")[2];
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // getProducts(nameCollection).then((res) => setProducts(res));
        const getProducts = async () => {
            const products = await categoriesApi.getCollection(nameCollection);
            setProducts(products);
        };
        getProducts();
    }, [nameCollection]);

    return (
        <div className="container">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col col-lg-9 col-12">
                    <div className="row">
                        <h3 className="heading text-center">
                            {nameCollection}
                        </h3>
                    </div>
                    <div className="row gy-4 gx-0">
                        {products.map((product) => (
                            <Link
                                to={`/products/${product.id}`}
                                key={product.id}
                                className="col-6 col-sm-4 col-lg-3 mx-0 d-flex"
                            >
                                <Item data={product} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
