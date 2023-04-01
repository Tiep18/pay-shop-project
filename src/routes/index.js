import Home from "../components/pages/Home/Home";
import AboutPage from "../components/pages/AboutPage/AboutPage";
import Cart from "../components/pages/Cart/Cart";
import ContactPage from "../components/pages/ContactPage/ContactPage";
import config from "../config/config";
import Collection from "../components/pages/Collection/Collection";
import Product from "../components/pages/Product/Product";
import LogIn from "../components/pages/LogIn/LogIn";
import SignIn from "../components/pages/SignIn/SignIn";

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: AboutPage },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.contact, component: ContactPage },
    { path: config.routes.newCollection, component: Collection },
    { path: config.routes.menCollection, component: Collection },
    { path: config.routes.womenCollection, component: Collection },
    { path: config.routes.product, component: Product },
    { path: config.routes.login, component: LogIn },
    { path: config.routes.signin, component: SignIn },
    // { path: config.routes.menCollection, component: Collection },
    // { path: config.routes.womenCollection, component: Collection },
];
