import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import classNames from "classnames/bind";
import styles from "./NavBar.module.scss";
import { useSelector } from "react-redux";
import { productRemainingSelector } from "../../redux/selectors";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function NavBar() {
    const [isActive, setIsActive] = useState(false);
    const products = useSelector(productRemainingSelector);

    useEffect(() => {
        setIsActive(true);
        const id = setTimeout(() => {
            setIsActive(false);
        }, 1000);
        return () => clearTimeout(id);
    }, [products.length]);
    return (
        <>
            <Navbar bg="light" expand="lg" className="border-bottom shadow-sm">
                <Container>
                    <Navbar.Brand className="fs-2 fw-border me-5" href="#">
                        PAY SHOP
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex flex-grow-1">
                            <Form.Control
                                type="search"
                                placeholder="Find something..."
                                className="me-2 border-secondary bg-secondary bg-opacity-10"
                                aria-label="Search"
                            />
                            <Button variant="outline-secondary">Search</Button>
                        </Form>
                        <Form className="d-flex ms-lg-5 my-lg-0 my-2">
                            <Link to={routes.login}>
                                <Button variant="outline-secondary">
                                    <i className="fa fa-sign-in me-2"></i>
                                    Log in
                                </Button>
                            </Link>
                            <Link to={routes.cart}>
                                <Button
                                    variant="outline-secondary"
                                    className={`ms-2 ${
                                        isActive ? "active" : ""
                                    }`}
                                >
                                    <i className="fa fa-shopping-cart me-2"></i>
                                    <span className="me-1">Cart</span>
                                    <span className="">{`(${products.length})`}</span>
                                </Button>
                            </Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar className={cx("py-1", "nav-control")}>
                <Container>
                    <Nav className="fs-5 mx-auto py-0">
                        <Link
                            to={routes.home}
                            className="me-2 me-sm-5 nav-link"
                        >
                            Home
                        </Link>
                        <NavDropdown
                            className="me-2 me-sm-5"
                            title="Products"
                            id="navbarScrollingDropdown"
                        >
                            <Link
                                to={routes.newCollection}
                                className="nav-link"
                            >
                                New Collection
                            </Link>
                            <NavDropdown.Divider />
                            <Link
                                to={routes.menCollection}
                                className="nav-link"
                            >
                                Men's Collection
                            </Link>
                            <Link
                                to={routes.womenCollection}
                                className="nav-link"
                            >
                                Women's Collection
                            </Link>
                        </NavDropdown>

                        <Link to="/about" className="me-2 me-sm-5 nav-link">
                            About
                        </Link>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
