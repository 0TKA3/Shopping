import { useState } from "react";
import trashBinIcon from '../src/assets/images/icons/trash-bin.png'

const Cart = ({ cartItems, setCartItems }) => {
  let total = 0;
  function totalPrice(obj) {
    total = total + Number(obj);
  }

  function deleteItem(event) {
    const index = parseInt(event.currentTarget.dataset.index);
    let currentItem = cartItems.find((obj) => obj.id === index);
    let newList = cartItems.filter((el) => {
      if (el.id != index) {
        return true;
      }
    });
    setCartItems(newList);
    localStorage.setItem("storageCart", JSON.stringify(newList));
  }

  let isEmpty = false;

  if (cartItems.length == 0) {
    isEmpty = true;
  }

  return (
    <main>
      <div className="cart-container">
        <div className="products cart-products" id="products">
          {isEmpty ? (
            <div className="products-list cart-prod-list cart-empty">
              <h1>Cart is empty</h1>
            </div>
          ) : (
            <div className="products-list cart-prod-list">
              {cartItems.map((obj, index) => (
                <div className="product-card cart-product-card" key={index}>
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
                    <button
                      data-index={obj.id}
                      className="cart-button"
                      onClick={deleteItem}
                    >
                      <img
                        src={trashBinIcon}
                        alt="delete"
                        className="cart-delete"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="cart-information">
          {cartItems.forEach(function (elem) {
            totalPrice(elem.price);
          })}
          <div className="total">
            <h3>{total}$</h3>
          </div>
          <div className="to-order">
            <button type="button">To order</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
