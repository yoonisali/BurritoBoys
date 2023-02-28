import React from "react";
import PropTypes from 'prop-types';

function NewSpotForm(props) {
  async function createSpot(spot) {
    return new Promise((resolve, reject) => {
      fetch("/api/Spot", {
        "method": "POST",
        "headers": {
          'Accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify(spot)
      }).then((res) => {
        res.json()
          .then((jres) => {
            console.log(`Fetch response: ${JSON.stringify(jres)}`)
            resolve()
          })
          .catch((err) => {
            console.log(`failed to jsonify response: ${err}`)
            reject(err)
          })
      })
      .catch((err) => {
        console.log(`Fetch error: ${err}`)
        reject(err)
      })
    })
  }

  function handleNewSpotSubmission(e) {
    e.preventDefault();
    const target = {
      name: e.target.name.value,
      city: e.target.city.value,
      state: e.target.state.value,
      address: e.target.address.value,
      website: e.target.website.value,
      averageRating: 0
    };
    console.log(JSON.stringify(target))
    createSpot(target)
      .then(() => props.onClick())
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="spot-form text-center">
      <h1 className="mt-2 text-2xl font-bold">Add a Spot</h1>
      <form onSubmit={handleNewSpotSubmission}>
        <input
          className="border-2 rounded mt-2"
          name="name"
          placeholder="Name"
          type="text" /><br />
        <input
          className="border-2 rounded mt-2"
          name="city"
          placeholder="City"
          type="text" /><br />
        <input
          className="border-2 rounded mt-2"
          name="state"
          placeholder="State"
          type="text" /><br />
        <input
          className="border-2 rounded mt-2"
          name="address"
          placeholder="Address"
          type="text" /><br />
        <input
          className="border-2 rounded mt-2"
          name="website"
          placeholder="Website"
          type="text" /><br />
        <button className="border-2 rounded bg-green-300 p-1 mt-1" type="submit">Submit!</button>
      </form>
    </div>
  )
}

NewSpotForm.propTypes = {
  onNewSpotCreation: PropTypes.func,
  onClick: PropTypes.func
}

export default NewSpotForm;
