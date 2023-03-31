import PropTypes from "prop-types";
import styles from "./Item.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

function Item({ data = {}, className, onClick }) {
    return (
        <div
            onClick={onClick}
            className={cx("product", {
                [className]: className,
            })}
            role="button"
        >
            <img
                src={process.env.PUBLIC_URL + data.thumbnail}
                alt={data.name}
            />
            <h3 className="name fs-6 text-center mt-3">{data.name}</h3>
            <p className="price text-center text-danger">
                <span className="currency">$</span>
                {data.price}
            </p>
        </div>
    );
}

Item.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Item;
