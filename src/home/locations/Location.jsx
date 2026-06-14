import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = ({ name, location, description }) => {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <div className="location">
      <div className="location-content">
        <h2>{name}</h2>
        <p>{location}</p>
        <p>
          {readMore ? description : `${description.slice(0, 100)}...`}
          <button
            type="button"
            onClick={() => setReadMore(!readMore)}
            className="info-btn"
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <div className="location-map">
        <FaMapMarkerAlt />
      </div>
    </div>
  );
};

export default Location;
