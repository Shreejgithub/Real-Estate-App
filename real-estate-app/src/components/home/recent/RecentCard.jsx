import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../../../CartContext';
import Swal from 'sweetalert2'; // Import SweetAlert2

const RecentCard = ({ filter }) => {
  const [propertyList, setPropertyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8001/api/properties/get');
        setPropertyList(response.data);
      } catch (error) {
        setError('Failed to load properties');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredList = propertyList.filter((val) => {
    const matchesCategory = filter === 'All' || val.category === filter;
    const matchesSearch = val.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredList.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredList.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle "Add to Cart" click
  const handleAddToCart = (val) => {
    addToCart(val); // Add the property to cart using context

    // Show success alert
    Swal.fire({
      title: 'Success!',
      text: 'Your Property is added to cart successfully',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#27ae60',
    });
  };

  if (loading) {
    return <p>Loading properties...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for properties..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  borderRadius: '0.375rem',
                  borderColor: '#27ae60',
                  borderWidth: "2px",
                  padding: '10px',
                  fontSize: '16px',
                }}
              />
              <button
                className="btn btn-success"
                type="button"
                onClick={() => setCurrentPage(1)}
                style={{
                  borderRadius: '0.375rem',
                  backgroundColor: '#27ae60'
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="content grid3 mtop">
        {currentCards.map((val, index) => {
          const { cover, name, category, location, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt={name} />
              </div>

              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: category === 'For Sale' ? '#25b5791a' : '#ff98001a',
                      color: category === 'For Sale' ? '#25b579' : '#ff9800',
                    }}
                  >
                    {category}
                  </span>
                  <i
                    className="fa-solid fa-cart-plus"
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                    onClick={() => handleAddToCart(val)} // Show SweetAlert when added to cart
                  ></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>

              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>
                  <label htmlFor="">/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pagination d-flex justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`btn mx-1 ${currentPage === pageNumber ? 'active' : ''}`}
              style={{
                backgroundColor: '#27ae60',
                color: '#fff',
                borderColor: '#27ae60',
              }}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default RecentCard;
