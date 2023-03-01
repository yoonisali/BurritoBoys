import React, { useEffect, useState } from "react";
import SpotDetails from "./SpotDetails";
import SpotList from "./SpotList";
import NewSpotForm from "./NewSpotForm";
import NewSalsaForm from "./NewSalsaForm"
import TopSpots from './TopSpots'


function BurritoControl() {
  const [selectedSpot, setSelectedSpot] = useState(null)
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)
  const [spotList, setSpotList] = useState([]);
  const [topSpots, setTopSpots] = useState([])

  useEffect(() => {
    getSpotList()
  }, [])

  useEffect(() => {
    getTopSpots(3)
  }, [])
  
  async function getSpotList() {
    return new Promise((resolve, reject) => {
      fetch("/api/Spot", {
        "method": "GET"
      }).then((res) => {
        res.json()
          .then((jres) => {
            setSpotList(jres)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
        .catch((err) => {
          reject(err)
        })
    });
  }
  
  async function getTopSpots(amount) {
    return new Promise((resolve, reject) => {
      fetch(`/api/Spot/gettop/${amount}`, {
        "method": "GET"
      }).then((res) => {
        res.json()
          .then((jres) => {
            setTopSpots(jres)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
        .catch((err) => {
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

  const handleSpotSelection = (id) => {
    const selection = spotList.filter(spot => spot.spotId === id)[0];
    setSelectedSpot(selection);
  }

  const handleAddingNewSpotToList = (spotData) => {
    setFormVisibleOnPage(false);
    setSpotList(spotData);
  }

  let currVisibleState = null;
  let buttonText = null;

  if (selectedSpot !== null) {
    currVisibleState = <SpotDetails
    spot={selectedSpot}
    />
    buttonText = "Return to Spot List!";
  } else if (formVisibleOnPage) {
    currVisibleState = <NewSpotForm
      onNewSpotCreation={handleAddingNewSpotToList}
      onClick={handleClick}
    />
    buttonText = "Return to Spot List!";

  } else {
    currVisibleState = (
      <React.Fragment>
        <TopSpots 
          onSpotSelection={handleSpotSelection}
          topSpots={topSpots}/>
        <SpotList
          onSpotSelection={handleSpotSelection}
          setSpots={spotList} />
      </React.Fragment>
    )
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