import prod1 from "../images/products/1.png";
import prod2 from "../images/products/2.png";
import prod3 from "../images/products/3.png";
import prod4 from "../images/products/4.png";
import prod5 from "../images/products/5.png";
import prod6 from "../images/products/6.png";

const productList = [
  {
    img: prod1,
    title: "Hoodie",
    price: "29",
  },
  {
    img: prod2,
    title: "Jacket",
    price: "49",
  },
  {
    img: prod3,
    title: "T-Shirt",
    price: "13",
  },
  {
    img: prod4,
    title: "T-Shirt",
    price: "25",
  },
  {
    img: prod5,
    title: "Pullover",
    price: "64",
  },
  {
    img: prod6,
    title: "Suit",
    price: "74",
  },
];



const Products = ({cartProducts, setCartProducts}) => {

  function addToCartHandler(event) {

    let newItem = {
      
    }

    setCartProducts()
  }

  return (
    <div className="products" id="products">
      <h1>OUR ASSORTMENT</h1>
      <div className="products-list">
        {productList.map((obj, index) => (
          <div className="product-card" key={index}>
            <img
              className="img-responsive"
              src={obj.img}
              alt={obj.title}
            />
            <div className="product-card-information">
              <div className="information">
                <h3>{obj.title}</h3>
                <h2 className="price">{obj.price}$</h2>
              </div>
              <button onClick={addToCartHandler}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
