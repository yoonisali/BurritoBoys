import React from "react";
import PropTypes from "prop-types";
import Spot from './Spot';


function SpotList(props) {
  const { setSpots } = props;
    return (
      <div>
        <h1>Spot List</h1>
        {setSpots.map((spot, index) =>
          <div key={index}>
            <Spot
            whenSpotClicked={props.onSpotSelection}
              name={spot.name}
              city={spot.city}
            />
          </div>
        )}
      </div>
    );
}

SpotList.propTypes = {
  onSpotSelection: PropTypes.func,
  setSpots: PropTypes.array,
}

export default SpotList;