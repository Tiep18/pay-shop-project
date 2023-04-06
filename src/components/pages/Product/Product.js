import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import routes from "../../../config/routes";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { useDispatch } from "react-redux";
import productSlice from "./productSlice";
import { v4 } from "uuid";
import categoriesApi from "../../../api/categoriesApi";

const cx = classNames.bind(styles);

function Product() {
    const param = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({ image: [], sizes: [] });
    const [quantity, setQuantity] = useState(1);
    const [thumbnail, setThumbnail] = useState("");
    const [activeColor, setActiveColor] = useState(null);
    const [activeSize, setActiveSize] = useState(null);

    const handleQuantity = (e) => {
        if (e.target.value < 1 || isNaN(e.target.value)) {
            return setQuantity(1);
        }
        setQuantity(parseInt(e.target.value));
    };

    const handleThumbnail = (e) => {
        setThumbnail(e.target.src);
    };

    const handleColor = (img) => {
        setActiveColor(img);
        setThumbnail(img);
    };

    const handleSize = (size) => {
        setActiveSize(size);
    };
    useEffect(() => {
        const getProduct = async () => {
            const product = await categoriesApi.getProduct(param.id);
            setProduct(product);
        };
        getProduct();
    }, [param]);

    const handleAddToCart = () => {
        if (activeSize === null || activeSize === null) {
            alert("Please select the parameters");
            return;
        }
        dispatch(
            productSlice.actions.addProductToCart({
                uuid: v4(),
                id: param.id,
                name: product.name,
                price: product.price,
                size: activeSize,
                color: "black",
                colorImg: thumbnail,
                qty: quantity,
            })
        );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex bg-secondary bg-opacity-10 py-2">
                    <div className="px-3 border-end d-flex align-items-center">
                        <Link to={routes.home} className={cx("link")}>
                            Home
                        </Link>
                    </div>
                    <div className="px-3 border-end d-flex align-items-center">
                        <Link
                            to={`/products/${product.category}`}
                            className={cx("link")}
                        >
                            {product.category}
                        </Link>
                    </div>
                    <div className="px-3 d-flex align-items-center">
                        <p className="d-block my-auto">{product.name}</p>
                    </div>
                </div>
            </div>

            {/* product detail */}

            <div className="row pt-4">
                <div className="col-6">
                    <div className={cx("image-thumbnail")}>
                        <img
                            src={thumbnail || product.thumbnail}
                            alt={product.name}
                        />
                    </div>
                    <div className={cx("image-list")}>
                        {product.image.map((img, index) => (
                            <div
                                className={cx("image-item")}
                                key={index}
                                onClick={handleThumbnail}
                            >
                                <img src={img} alt={product.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-6">
                    <h4 className={cx("name-product")}>{product.name}</h4>
                    <h5 className={cx("price-product", "border-top")}>
                        <span className="currency fs-6">$</span>
                        {product.price}
                    </h5>

                    {/* color */}
                    <div className={cx("color", "border-top")}>
                        <p>Color</p>
                        <div className={cx("color-list-image")}>
                            {product.image.map((img, index) => (
                                <div
                                    className={cx(
                                        "color-item-image",
                                        `${activeColor === img ? "active" : ""}`
                                    )}
                                    key={index}
                                    onClick={() => handleColor(img)}
                                >
                                    <img src={img} alt={product.name} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* size */}
                    <div className={cx("size")}>
                        <p>Size</p>
                        <div className={cx("size-list")}>
                            {product.sizes.map((size, index) => (
                                <div
                                    className={cx(
                                        "size-item",
                                        `${activeSize === size ? "active" : ""}`
                                    )}
                                    key={index}
                                    onClick={() => handleSize(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* handle add to cart */}
                    <div className={cx("quantity-wrapper")}>
                        <button
                            className="btn-secondary"
                            onClick={() => {
                                setQuantity((prev) =>
                                    prev > 1 ? prev - 1 : 1
                                );
                            }}
                        >
                            -
                        </button>
                        <input
                            type="text"
                            className={cx("quantity")}
                            value={quantity}
                            onChange={handleQuantity}
                        />
                        <button
                            className="btn-secondary"
                            onClick={() => {
                                setQuantity((prev) => prev + 1);
                            }}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className="btn btn-dark w-100 mt-3 p-2"
                        onClick={handleAddToCart}
                    >
                        <i className="fa fa-shopping-cart me-2"></i>
                        <span className="ml-1">Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
