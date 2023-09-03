import Brands from "./Brands";
import Products from "./Products";
import Community from "./Community";


const Main = ({cartProducts, setCartProducts}) => {
  return (
    <main>
      <div className="container">
        <div className="banner"></div>
      </div>
      <Brands></Brands>
      <div className="container">
        <Products cartProducts={cartProducts} setCartProducts={setCartProducts}></Products>
        <div className="second-banner" id="sales"></div>
      </div>
      <Community></Community>
    </main>
  );
};

export default Main;
