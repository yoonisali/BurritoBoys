import React from "react";
import PropTypes from 'prop-types';

function Spot(props) {
  return(
    <div className="hover:bg-yellow-500" onClick = {() => props.whenSpotClicked(props.id)}>
      <p>Name: {props.name}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

Spot.propTypes = {
  whenSpotClicked: PropTypes.func,
  name: PropTypes.string,
  state: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  website: PropTypes.string,
  id: PropTypes.number
}

export default Spot;