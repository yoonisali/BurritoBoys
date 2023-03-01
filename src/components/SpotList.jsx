import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spot from './Spot'


function SpotList(props) {



  if (error) {
    return <h1>Error: {error.message}</h1>
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>
  } else {
    return (
      <div>
        <h1>Spot List</h1>
        {spotList.map((spot, index) =>
          <div key={index}>
            <Spot
              whenSpotClicked={props.onSpotSelection}
              name={spot.name}
              city={spot.city}
              address={spot.address}
              state={spot.state}
              averageRating={spot.averageRating}
            />
          </div>
        )}
      </div>
    );
  }
}

SpotList.propTypes = {
  onSpotSelection: PropTypes.func,
  spotList: PropTypes.array
}

export default SpotList;