import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import config from "../../config/config";

import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div
            className={cx(
                "col-3",
                "border-end",
                "wrapper",
                "d-none",
                "d-lg-block"
            )}
        >
            <h3 className="title">Sidebar</h3>
            <div className="list-collections">
                <div className={cx("menu-item")}>
                    <NavLink
                        to={config.routes.newCollection}
                        className={cx("link")}
                    >
                        <span>New's Collection</span>
                    </NavLink>
                </div>
                <div className={cx("menu-item")}>
                    <NavLink
                        to={config.routes.menCollection}
                        className={cx("link")}
                    >
                        <span>Men's Collection</span>
                    </NavLink>
                </div>

                <div className={cx("menu-item")}>
                    <NavLink
                        to={config.routes.womenCollection}
                        className={cx("link")}
                    >
                        <span>Women's Collection</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
