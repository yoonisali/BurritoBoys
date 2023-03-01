import PropTypes from "prop-types";
import { BodyFetch } from "../actions/utils";

export default function NewSalsaForm(props) {
  const { spot } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const newSalsa = {
      name: event.target.name.value,
      description: event.target.description.value,
      spotId: spot.spotId
    }
    console.log(JSON.stringify(newSalsa))
    BodyFetch("/api/Salsa", "POST", newSalsa)
    .then(() => props.onClick())
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label className="px-2" htmlFor="name">Name</label>
      <input className="px-4" type="text" id="name" name="name" required />
      <br />
      <label className="px-2" htmlFor="description">Description</label>
      <input className="px-4" type="text" id="description" name="description" required />
      <button className="px-1.5 py-1 bg-orange-400 rounded-md text-white" type="submit">Add Salsa</button>
    </form>
  )
}

NewSalsaForm.propTypes = {
  sphot: PropTypes.object,
  onNewSalsaCreation: PropTypes.func,
  onClick: PropTypes.func
}