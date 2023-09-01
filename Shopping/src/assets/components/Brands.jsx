import HM from "../images/brands/1.png";
import OBEY from "../images/brands/2.png";
import Shopify from "../images/brands/3.jpeg";
import Lacoste from "../images/brands/4.png";
import Levis from "../images/brands/5.jpeg";
import Amazon from "../images/brands/6.jpeg";

const brandList = [
  {
    name: "H&M",
    img: HM,
  },
  {
    name: "OBEY",
    img: OBEY,
  },
  {
    name: "Shopify",
    img: Shopify,
  },
  {
    name: "Lacoste",
    img: Lacoste,
  },
  {
    name: "Levis",
    img: Levis,
  },
  {
    name: "Amazon",
    img: Amazon,
  },
];

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands-container">
        {brandList.map((obj, index) => (
          <img key={index} src={obj.img} alt={obj.name} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
