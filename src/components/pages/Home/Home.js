import className from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import categoriesApi from "../../../api/categoriesApi";
import banner from "../../../assets/imgs/banner.jpg";
import config from "../../../config/config";
import Item from "../../Products/Item";
import styles from "./Home.module.scss";

const cx = className.bind(styles);

function Home() {
    const settings = {
        className: "center",
        centerPadding: "60px",
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                    speed: 1000,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    speed: 800,
                },
            },
        ],
    };

    const [productsNew, setProductsNew] = useState([]);
    const [productsMen, setProductsMen] = useState([]);

    useEffect(() => {
        const getCollection = async () => {
            const newCollection = await categoriesApi.getCollection(
                "new-collection"
            );
            setProductsNew(newCollection);
        };
        getCollection();
    }, []);
    useEffect(() => {
        const getCollection = async () => {
            const menCollection = await categoriesApi.getCollection(
                "men-collection"
            );
            setProductsMen(menCollection);
        };
        getCollection();
    }, []);

    return (
        // Banner
        <div className="container-fluid px-0">
            <div className="banner">
                <img style={{ maxWidth: "100%" }} src={banner} alt="Banner" />
            </div>
            {/* New Collection */}
            <div className="container d-flex flex-column flex-lg-row mt-5 align-items-center">
                <div className="col-12 col-lg-2 text-center text-lg-end">
                    <Link
                        to={config.routes.newCollection}
                        className={cx("collection-link")}
                    >
                        <h5 className="my-1 fs-3 ">NEW'S COLLECTION</h5>
                    </Link>
                    <p className="description">
                        Make bold fashion choices with our latest shoes, bags
                        and accessories
                    </p>
                </div>
                <div className={cx("col-12", "col-lg-10", "wrapper-products")}>
                    <div className="col-10 mx-auto">
                        <Slider {...settings} className={cx("carousel")}>
                            {productsNew.map((data) => (
                                <Link
                                    to={`/products/${data.id}`}
                                    key={data.id}
                                    className="col-6 col-sm-4 col-lg-3 mx-0 d-flex"
                                >
                                    <Item data={data} />
                                </Link>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <Link
                    to={config.routes.menCollection}
                    className={cx("collection-link")}
                >
                    <h5 className="text-center fs-3">MEN'S COLLECTION</h5>
                </Link>
                <p className="description text-center mb-4">
                    Make bold fashion choices with our latest shoes, bags and
                    accessories
                </p>
                <div className="container">
                    <div className="row gy-4 gx-0 ">
                        {productsMen.map((data) => (
                            <Link
                                to={`/products/${data.id}`}
                                key={data.id}
                                className="col-6 col-sm-4 col-lg-3 mx-0 d-flex"
                            >
                                <Item data={data} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        //
    );
}

export default Home;
