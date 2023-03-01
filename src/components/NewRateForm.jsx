import PropTypes from "prop-types";
import { BodyFetch } from "../actions/utils";

export default function NewRateForm(props) {
  const spotId = props.spotId;

  function handleSubmit(event) {
    event.preventDefault();
    const newRate = {
      rate: parseInt(event.target.rate.value),
      spotId: spotId
    }
    BodyFetch("/api/Rating", "POST", newRate)
    .then(() => props.onClick())
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label className="px-2" htmlFor="rate">Rating</label>
      <input className="px-4" type="number" id="rate" name="rate" min={0} max={5} defaultValue={0} required />
      <button className="px-1.5 py-1 bg-orange-400 rounded-md text-white" type="submit">Add Rate</button>
    </form>
  )
}

NewRateForm.propTypes = {
  spotId: PropTypes.number,
  onClick: PropTypes.func
}