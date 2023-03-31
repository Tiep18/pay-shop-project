import classNames from "classnames/bind";
import { Form, Button } from "react-bootstrap";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className="container-fluid mt-5 border-top">
            <div className="row text-center">
                <div className={cx("sub-section")}>
                    <h4 className={cx("sub-heading")}>
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h4>
                    <p className={cx("sub-description")}>
                        Keep your finger on the pulse of fashion with weekly
                        round-ups of our latest arrivals, upcoming launches,
                        special promotions and trend-focused editorials.
                    </p>
                    <Form>
                        <Form.Group className={cx("sub-form")}>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className={cx("sub-input")}
                            />
                            <Button
                                variant="secondary"
                                type="submit"
                                className={cx("sub-button")}
                            >
                                SUBSCRIBE
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div className={cx("footer-infor-section")}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className={cx("footer-content")}>
                                <h5 className={cx("footer-heading")}>
                                    SHOPPING WITH US
                                </h5>
                                <ul className={cx("footer-menu")}>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            My Account
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Shipping & Tracking
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Returns & Exchanges
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Promotions
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Student Discount
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Size Guide
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className={cx("footer-content")}>
                                <h5 className={cx("footer-heading")}>
                                    CUSTOMER CARE
                                </h5>
                                <ul className={cx("footer-menu")}>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Order Status
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Privilege Membership
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Counterfeit Education
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            COVID-19 Updates
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className={cx("footer-content")}>
                                <h5 className={cx("footer-heading")}>
                                    ABOUT US
                                </h5>
                                <ul className={cx("footer-menu")}>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Store Locator
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Brand Profile
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Ambassadors
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Sustainability
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Impact Programme
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Franchising Opportunities
                                        </a>
                                    </li>
                                    <li className={cx("footer-item")}>
                                        <a
                                            href="/"
                                            className={cx("footer-item-link")}
                                        >
                                            Affiliates
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className={cx("footer-content")}>
                                <div className={cx("social-section")}>
                                    <h5 className={cx("social-heading")}>
                                        FOLLOW US
                                    </h5>
                                    <ul className={cx("social-menu")}>
                                        <li className={cx("social-item")}>
                                            <i
                                                className={cx("fa fa-facebook")}
                                            ></i>
                                        </li>
                                        <li className={cx("social-item")}>
                                            <i
                                                className={cx(
                                                    "fa fa-instagram"
                                                )}
                                            ></i>
                                        </li>
                                        <li className={cx("social-item")}>
                                            <i
                                                className={cx("fa fa-youtube")}
                                            ></i>
                                        </li>
                                        <li className={cx("social-item")}>
                                            <i
                                                className={cx("fa fa-twitter")}
                                            ></i>
                                        </li>
                                        <li className={cx("social-item")}>
                                            <i
                                                className={cx(
                                                    "fa fa-pinterest"
                                                )}
                                            ></i>
                                        </li>
                                        <li className={cx("social-item")}>
                                            <i
                                                className={cx("fa fa-whatsapp")}
                                            ></i>
                                        </li>
                                        <li className={cx("social-item")}>
                                            <i
                                                className={cx("fa fa-spotify")}
                                            ></i>
                                        </li>
                                    </ul>
                                </div>

                                <div className={cx("app-download-section")}>
                                    <h5 className={cx("app-download-heading")}>
                                        DOWNLOAD OUR APP
                                    </h5>
                                    <ul className={cx("app-download-menu")}>
                                        <li
                                            className={cx("app-download-item")}
                                        ></li>
                                        <li
                                            className={cx("app-download-item")}
                                        ></li>
                                    </ul>
                                </div>

                                <div className={cx("payment-section")}>
                                    <h5 className={cx("payment-heading")}>
                                        ACCEPTED PAYMENT METHODS
                                    </h5>
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
        </div>
    );
}

export default Footer;
