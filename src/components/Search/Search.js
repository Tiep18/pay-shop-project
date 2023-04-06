import { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Link } from "react-router-dom";
import categoriesApi from "api/categoriesApi";
import useDebounce from "hooks/useDebounce";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [popperWidth, setPopperWidth] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const inputElement = useRef();
    const location = useLocation();
    const debounceValue = useDebounce(searchValue, 500);
    console.log(inputElement);

    // custom tippy width
    useEffect(() => {
        window.addEventListener("resize", () => {
            const width = inputElement.current
                ? inputElement.current.offsetWidth
                : 200;
            setPopperWidth(width);
        });
    }, [popperWidth]);

    // call API get products search
    useEffect(() => {
        if (debounceValue.trim() === "") {
            setSearchResult([]);
            setShowDropdown(false);
            return;
        }
        const getProduct = async () => {
            const data = await categoriesApi.searchProducts(debounceValue);
            setShowDropdown(true);
            setSearchResult(data);
        };

        getProduct();
    }, [debounceValue]);

    useEffect(() => {
        if (location.pathname) {
            setShowDropdown(false);
            setSearchValue("");
        }
    }, [location.pathname]);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleFocusChange = (e) => {
        if (searchValue.trim().length > 0) {
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    return (
        <div className="d-flex flex-grow-1">
            <Tippy
                delay={400}
                placement="bottom-start"
                visible={showDropdown}
                interactive
                onClickOutside={() => setShowDropdown(false)}
                render={(attrs) => (
                    <div
                        className={cx("box")}
                        style={{
                            width: `${popperWidth}px`,
                        }}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <h5 className={cx("title")}>Products available</h5>
                        <div className={cx("product-list")}>
                            {searchResult.length
                                ? searchResult.map((product) => (
                                      <Link
                                          key={product.id}
                                          to={`/products/${product.id}`}
                                          className={cx("product-item-link")}
                                      >
                                          <div className={cx("product-item")}>
                                              <div
                                                  className={cx(
                                                      "product-thumbnail"
                                                  )}
                                              >
                                                  <img
                                                      src={product.thumbnail}
                                                      alt={product.name}
                                                  />
                                              </div>
                                              <div
                                                  className={cx("product-info")}
                                              >
                                                  <h6>{product.name}</h6>
                                                  <p>{product.category}</p>
                                              </div>
                                          </div>
                                      </Link>
                                  ))
                                : null}
                        </div>
                    </div>
                )}
            >
                <Form className="d-flex flex-grow-1">
                    <Form.Control
                        ref={inputElement}
                        type="search"
                        placeholder="Find something..."
                        className="me-2 border-secondary bg-secondary bg-opacity-10"
                        aria-label="Search"
                        value={searchValue}
                        onChange={handleSearchChange}
                        onFocus={handleFocusChange}
                    />
                    <Button variant="outline-secondary">Search</Button>
                </Form>
            </Tippy>
        </div>
    );
}

export default Search;
