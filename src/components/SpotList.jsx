import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spot from './Spot'
import { GetSpotById } from "../actions/SpotUtils";


function SpotList(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [spotList, setSpotList] = useState([]);
  const [error, setError] = useState(null);
  const [testSpot, setTestSpot] = useState(null);

  

  useEffect(() => {
    getSpotList()
  }, [])
  useEffect(() => {
    if (spotList.length > 0) {
      const newTestSpot = GetSpotById(spotList, 4)
      console.log(`NewTestSpot: ${JSON.stringify(newTestSpot)}`)
      setTestSpot(newTestSpot)
    }
  }, [spotList])

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
              name={spot.name}
              city={spot.city}
            />
          </div>
        )}
        <h1>Test</h1>
        {
          testSpot != null ? (
            <Spot name={testSpot.name} city={testSpot.city}/>
          ) : null
        }
      </div>
    );
  }
}

SpotList.propTypes = {
  onSpotSelection: PropTypes.func,
  setSpots: PropTypes.func
}

export default SpotList;