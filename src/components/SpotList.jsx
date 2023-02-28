import React, { useState, useEffect } from "react";
import Spot from './Spot'


function SpotList() {
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
              name={spot.name}
              city={spot.city}
            />
          </div>
        )}
      </div>
    );
  }
}


export default SpotList;