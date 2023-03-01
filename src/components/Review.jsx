import React from "react";
import PropTypes from "prop-types";


function Review(props) {
  return(
    <div>
      <p>{props.rate}</p>
    </div>
  );
}

Review.propTypes = {
rate: PropTypes.number,
spotId: PropTypes.number
}
export default Review;  
