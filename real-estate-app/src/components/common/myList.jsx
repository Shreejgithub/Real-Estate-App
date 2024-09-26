import React, { useContext } from 'react';
import { CartContext } from '../../CartContext'; // Import the CartContext
import './myList.css'; // Assuming you have a CSS file for custom styles
import Header from './header/Header';

const MyList = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Get cart items and remove function from CartContext

  return (
    <>
      <Header />
      <div className="cart-page">
        <h2 className="cart-title">My Cart</h2>

        <div className="cart-container">
          {cartItems.length === 0 ? (
            <p className="empty-cart">No items in the cart.</p>
          ) : (
            cartItems.map((item, index) => {
              const { cover, name, category, location, price, type } = item;
              return (
                <div className="cart-item box shadow" key={index}>
                  <div className="cart-item-img">
                    <img src={cover} alt={name} />
                  </div>

                  <div className="cart-item-details">
                    <div className="cart-category flex">
                      <span
                        className="cart-category-label"
                        style={{
                          background: category === 'For Sale' ? '#25b5791a' : '#ff98001a',
                          color: category === 'For Sale' ? '#25b579' : '#ff9800',
                        }}
                      >
                        {category}
                      </span>
                    </div>
                    <h4 className="cart-item-name">{name}</h4>
                    <p className="cart-item-location">
                      <i className="fa fa-location-dot"></i> {location}
                    </p>
                  </div>

                  <div className="cart-item-price">
                    <button className="btn2">{price}</button>
                    <label>/sqft</label>
                    <span>{type}</span>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button> {/* Remove button */}
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default MyList;