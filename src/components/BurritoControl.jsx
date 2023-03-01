import React, { useState, useEffect } from "react";
import SpotDetails from "./SpotDetails";
import SpotList from "./SpotList";
import NewSpotForm from "./NewSpotForm";
import PropTypes from "prop-types";


function BurritoControl(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [spotList, setSpotList] = useState([]);
  const [error, setError] = useState(null)
  const [selectedSpot, setSelectedSpot] = useState(null)
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)


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

  const handleClick = () => {
    if (selectedSpot != null) {
      setSelectedSpot(null);
      setFormVisibleOnPage(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage)
    }
  }

  const handleEditClick = () => {

  }

  const handleDeleteClick = () => {

  }

  const handleAddingNewSpotToList = (spotData) => {
    setFormVisibleOnPage(false);
    setSpotList(spotData)
  }

  const handleSpotSelection = (id) => {
    const selection = spotList.filter(spot => spot.spotId === id)[0];
    setSelectedSpot(selection);
  }

  let currVisibleState = null;
  let buttonText = null;
  

  if (error) {
    return <h1>Error: {error.message}</h1>
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>
  } else {
  if (selectedSpot != null) {
    currVisibleState = <SpotDetails
    spot={selectedSpot}
    onClickingEdit={handleEditClick}
    onClickingDelete={handleDeleteClick}
    />
    buttonText = "Return to Spot List!";
  } else if(formVisibleOnPage) {
    currVisibleState = <NewSpotForm 
    onNewSpotCreation={handleAddingNewSpotToList}
    onClick={handleClick}
    />
    buttonText="Return to Spot List!";

  } else {
    currVisibleState = <SpotList 
    onSpotSelection ={handleSpotSelection}
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

BurritoControl.propTypes = {
  spotList: PropTypes.array, 
}

export default BurritoControl;