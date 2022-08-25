import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
  return (
    <div className="full-grid">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
