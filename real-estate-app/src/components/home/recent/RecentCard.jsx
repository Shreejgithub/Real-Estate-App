import React, { useState, useEffect } from "react";
import axios from "axios";

const RecentCard = ({ filter }) => {
  // State to store the fetched property list
  const [propertyList, setPropertyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Set how many cards per page

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("http://localhost:8001/api/properties/get"); // API call
        setPropertyList(response.data); // Store the fetched data in state
      } catch (error) {
        setError("Failed to load properties");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the fetch happens only once when the component mounts

  // Filter the list based on the selected category
  const filteredList = propertyList.filter((val) => {
    if (filter === "All") {
      return true; // Show all cards if "All" is selected
    }
    return val.category === filter; // Filter by category
  });

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredList.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredList.length / cardsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading properties...</p>; // Display loading message while data is being fetched
  }

  if (error) {
    return <p>{error}</p>; // Display error message if there's an error
  }

  return (
    <>
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
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa-solid fa-heart"></i>
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

      {/* Pagination controls */}
      <div className="pagination d-flex justify-content-center mt-4">
  {Array.from({ length: totalPages }, (_, index) => index + 1).map(
    (pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => paginate(pageNumber)}
        className={`btn mx-1 ${currentPage === pageNumber ? "active" : ""}`}
        style={{
          backgroundColor: "#27ae60", // Custom background color
          color: "#fff", // White text color
          borderColor: "#27ae60", // Border color same as background
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





// import React from "react";
// import { list } from "../../data/Data";

// const RecentCard = () => {
//   return (
//     <>
//       <div className="content grid3 mtop">
//         {list.map((val, index) => {
//           const { cover, name, category, location, price, type } = val;
//           return (
//             <div className="box shadow" key={index}>
//               <div className="img">
//                 <img src={cover} />
//               </div>

//               <div className="text">
//                 <div className="category flex">
//                   <span
//                     style={{
//                       background:
//                         category === "For Sale" ? "#25b5791a" : "#ff98001a",
//                       color: category === "For Sale" ? "#25b579" : "#ff9800",
//                     }}
//                   >
//                     {category}
//                   </span>
//                   <i className="fa-solid fa-heart"></i>
//                 </div>
//                 <h4>{name}</h4>
//                 <p>
//                     <i className="fa fa-location-dot">{location}</i>
//                 </p>
//               </div>

//               <div className="button flex">
//                 <div>
//                     <button className="btn2">{price}</button><label htmlFor=''>/sqft</label>
//                 </div>
//                 <span>{type}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default RecentCard;


