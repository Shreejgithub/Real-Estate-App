import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import Swal from 'sweetalert2'; // Import SweetAlert2 for notifications
import './myList.css';
import Header from './header/Header';
import { useHistory } from 'react-router-dom';

const MyList = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Get cart items and remove function from CartContext
  const history = useHistory();

  // Navigate to ViewProperty component with the clicked item's id
  const handleViewProperty = (item) => {
    history.push(`/property/${item.id}`, { propertyData: item });
  };

  // Function to handle item removal with SweetAlert notification
  const handleRemove = (item) => {
    removeFromCart(item); // Remove item from cart

    // Show SweetAlert notification
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Your property removed from My Cart',
      showConfirmButton: false,
      timer: 2000,
      background: '#f8f9fa',
      iconColor: '#28a745',
      customClass: {
        title: 'swal2-title-custom',
      },
      didOpen: (toast) => {
        toast.style.top = '100px'; // Adjust top margin for the toast
      },
    });
  };

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
                  {/* Cross icon for removing item */}
                  <span 
                    className="remove-icon" 
                    onClick={() => handleRemove(item)}
                  >
                    &times; {/* Cross (X) symbol */}
                  </span>

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

                  {/* View Property button */}
                  <button 
                    className="remove-btn" 
                    onClick={() => handleViewProperty(item)}
                  >
                    View Property
                  </button>
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
