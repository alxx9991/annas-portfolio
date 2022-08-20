import Header from "../sections/Header";

const Layout = ({ children }) => {
  return (
    <div className="full-grid">
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
