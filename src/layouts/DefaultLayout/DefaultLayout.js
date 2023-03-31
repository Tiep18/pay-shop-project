import PropTypes from "prop-types";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

function DefaultLayout({ children }) {
    return (
        <>
            <NavBar></NavBar>
            {children}
            <Footer />
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
