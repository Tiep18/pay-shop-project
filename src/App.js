import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Provider store={store}>
                    <div className="container-fluid px-0">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = DefaultLayout;
                                if (route.layour) {
                                    Layout = route.layour;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    ></Route>
                                );
                            })}
                        </Routes>
                    </div>
                </Provider>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
