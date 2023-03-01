import React, { useState } from "react";
import SpotDetails from "./SpotDetails";
import SpotList from "./SpotList";
import { db } from '../firebase.jsx';
import { collection, addDoc } from 'firebase/firestore';
import NewSpotForm from "./NewSpotForm";


function BurritoControl() {
  const [viewDetails, setViewDetails] = useState(false);
  const [mainSpotList, setMainSpotList] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null)
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false);
  const [spotList, setSpotList] = useState([]);
  const [error, setError] = useState(null);

  async function getSpotList(spot) {
    return new Promise((resolve, reject) => {
      fetch("/api/Spot", {
        "method": "GET"
      }).then((res) => {
        res.json()
          .then((jres) => {
            props.setSpots(jres);
            setSpotList(jres)
            setIsLoaded(true);
            resolve()
          })
          .catch((err) => {
            setIsLoaded(true);
            setError(err)
            reject(err)
          })
      })
        .catch((err) => {
          setError(err)
          reject(err)
        })
    });
  }

  const handleClick = () => {
    if (selectedSpot != null) {
      setSelectedSpot(null);
      setFormVisibleOnPage(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage)
    }
  }

  const handleSpotSelection = () => {
  }

  const handleAddingNewSpotToList = (spotData) => {
    setFormVisibleOnPage(false);
  }

  let currVisibleState = null;
  let buttonText = null;

  if (viewDetails) {
    currVisibleState = <SpotDetails
    />
    buttonText = "Return to Spot List!";
  } else if (formVisibleOnPage) {
    currVisibleState = <NewSpotForm
      onNewSpotCreation={handleAddingNewSpotToList}
      onClick={handleClick}
    />
    buttonText = "Return to Spot List!";

  } else {
    currVisibleState = <SpotList
      onSpotSelection={handleSpotSelection}
      setSpots={setMainSpotList}
    />
    buttonText = "Add a Spot!";
  }

  return (
    <React.Fragment>
      {currVisibleState}
      <button className="bg-red-300 rounded p-1" onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  )

}

export default BurritoControl;