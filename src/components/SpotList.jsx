import React, { useReducer, useEffect } from "react";
import { getAllSpots, getAllSpotsFailure } from "../actions";
import spotsReducer from "../reducers/spots-reducer";
import * as c from "../actions/ActionTypes";

const initialState = {
  isLoaded: false,
  spotList: [],
  error: null
};

function SpotList() {
  const [state, dispatch] = useReducer(spotsReducer, initialState)

  useEffect(() => {
    fetch(`https://localhost:7153/api/Spot`, {"mode": "no-cors"})
        .then(response => {
            if (!response.ok) {
                console.log(JSON.stringify(response))
                dispatch({"type": c.GET_ALL_SPOTS_FAILURE, "error":`${response.status}: ${response.statusText}`});
            } else {
                response.json()
                  .then((jsonRes) => {
                    dispatch({"type": c.GET_ALL_SPOTS, "spotList": jsonRes})
                  })
                  .catch((err) => {
                    dispatch({"type": c.GET_ALL_SPOTS_FAILURE, "error": err });
                  })
            }
        })
        .then((jsonifiedResponse) => {
            const action = getAllSpots(jsonifiedResponse.results)
            dispatch(action);
        })
        .catch((error) => {
            const action = getAllSpotsFailure(error.message)
            dispatch(action);
        });
}, [])

  const { error, isLoaded, spotList} = state;

  console.log(spotList);
  if (error) {
    return <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>
  } else {
    return (
      <div>
        <h1>Spot List</h1>
        <ul>
        {spotList.map((spot, index) =>
        <li key={index}>
          <hr />
          <h3>{spot.name}</h3>
          <h3>{spot.city}</h3>
        </li>
        )}
        </ul>
      </div>
    );
  }
}

export default SpotList;