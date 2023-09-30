import Brands from "./Brands";
import Products from "./Products";
import Community from "./Community";


const Main = ({setCartItems,cartItems}) => {
  return (
    <main>
      <div className="container">
        <div className="banner"></div>
      </div>
      <Brands></Brands>
      <div className="container">
        <Products setCartItems={setCartItems} cartItems={cartItems}></Products>
        <div className="second-banner" id="sales"></div>
      </div>
      <Community></Community>
    </main>
  );
};

export default Main;
