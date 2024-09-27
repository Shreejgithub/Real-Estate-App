import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCalendar,
  faChevronDown,
  faChevronUp,
  faClock,
  faDollarSign,
  faHome,
  faMapMarkerAlt,
  faParking,
  faPercent,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import "./viewProperty.css";
import Header from "./header/Header";

const ViewProperty = () => {
  const location = useLocation();
  const { propertyData } = location.state || {};

  const [isExpanded, setIsExpanded] = useState(false);

  if (!propertyData) {
    return <p>No property details found.</p>;
  }

  const {
    cover,
    name,
    category,
    location: propertyLocation,
    price,
    type,
  } = propertyData;

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `
    Welcome home to this sun-drenched and incredibly spacious 3-bedroom, 3-bathroom duplex corner unit with parking and two private outdoor spaces! 
    This meticulously maintained home offers the perfect blend of comfort and style. The main level boasts a beautifully appointed kitchen with sleek stainless steel appliances, tile backsplash, granite countertops, ample cabinetry, and a breakfast bar that overlooks the inviting open-concept living space which is highlighted by a cozy gas fireplace-perfect for those chilly evenings. 
    Step outside through the sliding glass doors to your oversized private patio, an ideal space for outdoor entertaining and summer barbecues. Convenience is key, with one bedroom and one full bath conveniently located on the main level. Retreat upstairs to your primary bedroom which is a true oasis complete with a generous walk-in closet, a private balcony, and luxurious en-suite bath with a double vanity, jacuzzi tub, and separate glass-enclosed shower. 
    The second floor also features a third generously sized bedroom, another full bath, and a conveniently located laundry area. High ceilings with crown molding, custom windows treatments, recessed lighting, gorgeous diagonal hardwood floors, and tons of closet space throughout. 
    Recent updates include a new furnace with a 10 year warranty (2022), new sump pump (2021), new garbage disposal (2022), and several cosmetic updates throughout. Incredibly low HOAs round out this lovely home. With dedicated parking and easy access to the CTA Brown Line and expressway, you're perfectly situated for commuting and exploring the city. 
    Don't miss out on this fantastic opportunity - schedule your showing today!
  `;

  const truncatedText = fullText.split(". ").slice(0, 3).join(". ") + ".";

  return (
    <>
      <Header />
      <div className="view-property-page">
        <h1 className="page-title">View Your Property</h1>
        <div className="jumbotron" style={{ backgroundImage: `url(${cover})` }}>
          <h2 className="property-name">{name}</h2>
        </div>
        <div className="property-info">
          <div className="info-column">
            <h3>Property Details</h3>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Location:</strong> {propertyLocation}
            </p>
            <p>
              <strong>Price:</strong> {price} /sqft
            </p>
            <p>
              <strong>Type:</strong> {type}
            </p>
          </div>
          <div className="about-home">
            <h3>About This Property</h3>
            <p
              className={`about-text ${isExpanded ? "expanded" : "collapsed"}`}
            >
              {isExpanded ? fullText : truncatedText}
            </p>
            <button className="toggle-button" onClick={toggleText}>
              {isExpanded ? (
                <>
                  <FontAwesomeIcon icon={faChevronUp} /> Show Less
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faChevronDown} /> Show More
                </>
              )}
            </button>
          </div>
          <br />
          <div className="additional-info">
            <h3>Additional Information</h3>
            <br />
            <div className="info-row">
              <div className="info-item">
                <FontAwesomeIcon icon={faClock} />
                <span>
                  <strong>7 hours on QuickHomes</strong>
                </span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faBuilding} />
                <span>
                  <strong>{type}</strong>
                </span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faCalendar} />
                <span>
                  <strong>Built in 2005</strong>
                </span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faDollarSign} />
                <span>
                  <strong>${price} per sq ft</strong>
                </span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faHome} />
                <span>
                  <strong>$160 monthly HOA fee</strong>
                </span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faParking} />
                <span>
                  <strong>1 parking space</strong>
                </span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faSnowflake} />
                <span>
                  <strong>Has A/C</strong>
                </span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faHome} />
                <span>
                  <strong>In-unit laundry (washer and dryer)</strong>
                </span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faPercent} />
                <span>
                  <strong>2.5% buyer's agent fee</strong>
                </span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>
                  <strong>{propertyLocation}</strong>
                </span>
              </div>
            </div>
          </div>
          <br />
          <div className="buy-button-container">
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProperty;
