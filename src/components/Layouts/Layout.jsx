import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
