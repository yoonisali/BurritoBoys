import React from "react";
import PropTypes from 'prop-types'
import Spot from "./Spot";
import { v4 } from 'uuid'

function TopSpots(props) {
  const { topSpots } = props

  return (
    <div className="top-spots">
      <h1 className="text-2xl font-bold">Top 3 Spots</h1>
      {topSpots.map((spot, index) => 
        <div key={v4()}>
          <Spot 
            whenSpotClicked={props.onSpotSelection}
            name={spot.name}
            city={spot.city}
            id={spot.spotId} />
        </div>
      )}
      
    </div>
  )
}

TopSpots.propTypes = {
  onSpotSelection: PropTypes.func,
  topSpots: PropTypes.array
}

export default TopSpots