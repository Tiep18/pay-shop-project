import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import routes from "../../../config/routes";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { productRemainingSelector } from "../../../redux/selectors";
import productSlice from "../Product/productSlice";
import { useState } from "react";

const cx = classNames.bind(styles);

function Cart() {
    const [deliveryCharges, SetDeliveryCharges] = useState(0);
    const products = useSelector(productRemainingSelector);
    const dispatch = useDispatch();

    const handleQty = (e, uuid) => {
        dispatch(
            productSlice.actions.updateQtyProductInCart({
                uuid,
                qty: e.target.value,
            })
        );
    };

    const handleRemoveProduct = (uuid) => {
        dispatch(
            productSlice.actions.removeProduct({
                uuid,
            })
        );
    };

    const subtotalValue = products.reduce(
        (prev, curr) => prev + curr.qty * curr.price,
        0
    );

    const handleDeliveryCharges = (e) => {
        SetDeliveryCharges(e.target.value);
    };
    return (
        <div className={cx("container", "mt-4")}>
            <div className={cx("row")}>
                <div className={cx("col-lg-8", "col-12", "cart-products")}>
                    <div className="col d-flex bg-secondary bg-opacity-10 py-2">
                        <div className="px-3 border-end d-flex align-items-center">
                            <Link to={routes.home} className={cx("link")}>
                                Home
                            </Link>
                        </div>

                        <div className="px-3 d-flex align-items-center">
                            <p className="d-block my-auto">Shopping Cart</p>
                        </div>
                    </div>
                    <h2 className={cx("cart-heading")}>SHOPPING CART</h2>

                    {/* products table */}
                    <div className={cx("products-table")}>
                        <div className={cx("products-heading", "col-12")}>
                            <div className="col-6 d-flex">
                                <div className="col-4">{`${products.length} ITEM(S)`}</div>
                                <div className="col-8">PRODUCTS</div>
                            </div>
                            <div className="col-6 d-flex">
                                <div className="col-4">PRICE</div>
                                <div className="col-4">QTY</div>
                                <div className="col-4">SUB TOTA</div>
                            </div>
                        </div>

                        {/* product list */}
                        <div className={cx("product-list", "col-12")}>
                            {products.map((product) => (
                                <div
                                    key={product.uuid}
                                    className={cx("product-item", "col")}
                                >
                                    <div className="col-6 d-flex align-items-center">
                                        <div
                                            className={cx("thumbnail", "col-4")}
                                        >
                                            <img
                                                src={product.colorImg}
                                                alt="product"
                                            />
                                        </div>
                                        <div className="col-8">
                                            <h6 className={cx("name-product")}>
                                                {product.name}
                                            </h6>
                                            <p className={cx("specifications")}>
                                                {`${product.color}, ${product.size}`}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex">
                                        <div className="col-4">{`$${product.price}`}</div>
                                        <div
                                            className={cx(
                                                "product-item-qty",
                                                "col-4"
                                            )}
                                        >
                                            <input
                                                type="number"
                                                value={product.qty}
                                                onChange={(e) =>
                                                    handleQty(e, product.uuid)
                                                }
                                            />
                                        </div>
                                        <div
                                            className={cx("col-4", "sub-total")}
                                        >
                                            {`$${product.qty * product.price}`}

                                            <div
                                                className={cx("icon")}
                                                onClick={() =>
                                                    handleRemoveProduct(
                                                        product.uuid
                                                    )
                                                }
                                            >
                                                <i className="fa fa-regular fa-trash"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className={cx(
                        "col-lg-4",
                        "col-12",
                        "mt-lg-0",
                        "mt-4",
                        "cart-sumary"
                    )}
                >
                    <div className={cx("content")}>
                        <div
                            className={cx(
                                "promo-section",
                                "bg-secondary",
                                "bg-opacity-10"
                            )}
                        >
                            <Form.Group
                                className={cx("d-flex")}
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Promo Code"
                                />
                                <Button variant="secondary" type="submit">
                                    Apply
                                </Button>
                            </Form.Group>
                        </div>

                        <div
                            className={cx(
                                "payment-section",
                                "bg-secondary",
                                "bg-opacity-10"
                            )}
                        >
                            <h4 className={cx("payment-heading")}>
                                ORDER SUMMARY
                            </h4>
                            <div className={cx("subtotal-section")}>
                                <p className={cx("total-label")}>Subtotal</p>
                                <p className={cx("total-amount")}>
                                    {`$${subtotalValue}`}
                                </p>
                            </div>
                            <div className={cx("cart_shipping_method")}>
                                <Form.Select
                                    value={deliveryCharges}
                                    onChange={handleDeliveryCharges}
                                >
                                    <option value={0}>Standard(FREE)</option>
                                    <option value={9.9}>Express($9.90)</option>
                                </Form.Select>
                            </div>
                            <div className={cx("estimated-section")}>
                                <p className={cx("estimated-label")}>
                                    Estimated Total
                                </p>
                                <p className={cx("estimated-amount")}>
                                    {`$${
                                        parseFloat(subtotalValue) +
                                        parseFloat(deliveryCharges)
                                    }`}
                                </p>
                            </div>
                            <Button
                                variant="success"
                                type="submit"
                                className="w-100"
                            >
                                PROCEED TO CHECKOUT
                            </Button>

                            <div className={cx("payment-method-section")}>
                                <h6 className={cx("payment-method-heading")}>
                                    ACCEPTED PAYMENT METHODS
                                </h6>
                                <div className={cx("payment-method-list")}>
                                    <img
                                        src="https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dw7a61515e/images/payment-icons/master-card.svg"
                                        alt="payment-method"
                                    />
                                    <img
                                        src="https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dw3315d9c1/images/payment-icons/visa.svg"
                                        alt="payment-method"
                                    />
                                    <img
                                        src="https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dw414c9888/images/payment-icons/american-express.svg"
                                        alt="payment-method"
                                    />
                                    <img
                                        src="https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dw25071b3d/images/payment-icons/paypal.svg"
                                        alt="payment-method"
                                    />
                                    <img
                                        src="https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dwce4a7e30/images/payment-icons/Shopback.svg"
                                        alt="payment-method"
                                    />
                                    <img
                                        src="https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dw6929ec25/images/payment-icons/atome-payment.svg"
                                        alt="payment-method"
                                    />
                                    <img
                                        src="https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dwb99b268a/images/payment-icons/bitcoin.svg"
                                        alt="payment-method"
                                    />
                                    <img
                                        src="https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dwaecb1cb9/images/payment-icons/ethereum.svg"
                                        alt="payment-method"
                                    />
                                    <img
                                        src="https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dwb7d700e1/images/payment-icons/tether.svg"
                                        alt="payment-method"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
