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
            <h3 className={cx("title")}>Collections</h3>
            <div className={cx("list-collections")}>
                <div className={cx("menu-item")}>
                    <NavLink
                        to={config.routes.newCollection}
                        className={(nav) =>
                            cx("link", { active: nav.isActive })
                        }
                    >
                        <span>NEW COLLECTION</span>
                    </NavLink>
                </div>
                <div className={cx("menu-item")}>
                    <NavLink
                        to={config.routes.menCollection}
                        className={(nav) =>
                            cx("link", { active: nav.isActive })
                        }
                    >
                        <span>MEN COLLECTION</span>
                    </NavLink>
                </div>

                <div className={cx("menu-item")}>
                    <NavLink
                        to={config.routes.jeansCollection}
                        className={(nav) =>
                            cx("link", { active: nav.isActive })
                        }
                    >
                        <span>JEANS COLLECTION</span>
                    </NavLink>
                </div>

                <div className={cx("menu-item")}>
                    <NavLink
                        to={config.routes.trousersCollection}
                        className={(nav) =>
                            cx("link", { active: nav.isActive })
                        }
                    >
                        <span>TROUSERS COLLECTION</span>
                    </NavLink>
                </div>

                <div className={cx("menu-item")}>
                    <NavLink
                        to={config.routes.joggersCollection}
                        className={(nav) =>
                            cx("link", { active: nav.isActive })
                        }
                    >
                        <span>JOGGERS COLLECTION</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
