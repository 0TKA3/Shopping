import { useState } from "react";

const Cart = ({cartItems, setCartItems}) => {


    let total = 0
    function totalPrice(obj) {
        total = total + Number(obj)
    }


    function deleteItem(event) {
        const index = parseInt(event.currentTarget.dataset.index);
        let currentItem = cartItems.find((obj) => obj.id === index);
        let newList = cartItems.filter((el) => {
            if(el.id != index) {
                return true
            }
        })
        setCartItems(newList)
    }


    let isEmpty = false

    if(cartItems.length==0) {
        isEmpty = true
    }

  if(isEmpty == false){ return (
    <main>
    <div className="cart-container">
      <div className="products cart-products" id="products">
        <div className="products-list cart-prod-list">
          {cartItems.map((obj, index) => (
            <div className="product-card cart-product-card" key={index}>
              <img className="img-responsive" src={obj.img} alt={obj.title} />
              <div className="product-card-information">
                <div className="information">
                  <h3>{obj.title}</h3>
                  <h2 className="price">{obj.price}$</h2>
                </div>
                <button data-index={obj.id} className="cart-button" onClick={deleteItem}>
                  <img src="src/assets/images/icons/trash-bin.png" alt="delete" className="cart-delete"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-information">
        <h1>Cart</h1>
        {cartItems.forEach(function(elem) {
            totalPrice(elem.price)
        })}
        <div className="cart-items">
            <div className="cart-items-item">
                {cartItems.map((obj, index) => (
                    <>
                        <p>{obj.title}  {obj.price}$</p>
                    </>
                ))}
            </div>
        </div>
       
        <div className="total">
            <h3>Total:{total}$</h3>
        </div>
        
      </div>
      </div>
    </main>
  );
};

if(isEmpty == true){ return (
    <main>
    <div className="cart-container">
      <div className="products cart-products" id="products">
        <div className="products-list cart-prod-list cart-empty">
            <h1>Cart is empty</h1>
        </div>
      </div>
      <div className="cart-information">
        <h1>Cart</h1>
        {cartItems.forEach(function(elem) {
            totalPrice(elem.price)
        })}
        <div className="cart-items">
            <div className="cart-items-item">
                {cartItems.map((obj, index) => (
                    <>
                        <p>{obj.title}  {obj.price}$</p>
                    </>
                ))}
            </div>
        </div>
       
        <div className="total">
            <h3>Total:{total}$</h3>
        </div>
        
      </div>
      </div>
    </main>
  );
};

}



export default Cart;
