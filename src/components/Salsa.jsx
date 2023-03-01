import React from "react";
import PropTypes from "prop-types";

function Salsa(props) {
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  );
}

Salsa.propTypes = {
name: PropTypes.string,
description: PropTypes.string,
spotId: PropTypes.string
}

export default Salsa;  