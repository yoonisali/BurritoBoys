import React from "react";
import PropTypes from "prop-types";
import Spot from './Spot';
import { v4 } from 'uuid'

function SpotList(props) {
  const { setSpots } = props;
  // console.log(setSpots[1].spotId)
  // console.log(setSpots[1].name)
    return (
      <div className="my-4">
        <h1 className="text-2xl font-bold">Spot List</h1>
        {setSpots.map((spot, index) =>
          <div key={v4()}>
            <Spot
            whenSpotClicked={props.onSpotSelection}
              name={spot.name}
              city={spot.city}
              address={spot.address}
              website={spot.website}
              id={spot.spotId}
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