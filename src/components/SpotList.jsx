import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spot from './Spot'


function SpotList(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [spotList, setSpotList] = useState([]);
  const [error, setError] = useState(null)


  useEffect(() => {
    async function getSpotList(spot) {
      return new Promise((resolve, reject) => {
        fetch("/api/Spot", {
          "method": "GET"
        }).then((res) => {
          res.json()
            .then((jres) => {
              setSpotList(jres);
              setIsLoaded(true);
              console.log(`Fetch response: ${JSON.stringify(jres)}`)
              resolve()
            })
            .catch((err) => {
              setIsLoaded(true);
              console.log(`failed to jsonify response: ${err}`)
              reject(err)
            })
        })
          .catch((err) => {
            setError(err)
            console.log(`Fetch error: ${err}`)
            reject(err)
          })
      });
    }
    getSpotList();
  }, [])

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