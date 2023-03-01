import React, { useState } from "react";
import SpotDetails from "./SpotDetails";
import SpotList from "./SpotList";
import NewSpotForm from "./NewSpotForm";
import PropTypes from "prop-types";


function BurritoControl(props) {

  // const [viewDetails, setViewDetails] = useState(false); 
  const [mainSpotList, setMainSpotList] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null)
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)

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
    setMainSpotList(spotData)
  }

  const handleSpotSelection = (id) => {
    const selection = mainSpotList.filter(spot => spot.spotId === id)[0];
    setSelectedSpot(selection);
  }

  let currVisibleState = null;
  let buttonText = null;

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