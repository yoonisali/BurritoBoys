import React from "react";
import PropTypes from 'prop-types';

function Spot(props) {
  return(
    <div>
      <p>Spot Name: {props.name}</p>
    </div>
  );
}

Spot.propTypes = {
  name: PropTypes.string,
  state: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  website: PropTypes.string,
  id: PropTypes.string
}

export default Spot;