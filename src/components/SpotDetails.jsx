import React from "react";
import PropTypes from 'prop-types';

function SpotDetails(props) {
    const { spot, onClickingReview, onClickingSalsa } = props;

    return (
        <div>
            <h1>Spot Detail Page</h1>
            <p>{spot.name}</p>
            <p>{spot.state}</p>
            <p>{spot.city}</p>
            <p>{spot.address}</p>
            <p>{spot.website}</p>
            <p>{spot.averageRating}</p>
            <button onClick={() => onClickingSalsa(spot.spotId)} className="bg-yellow-300 rounded p-1 m-2">Add Salsas</button><br />
            <button onClick={() => onClickingReview(spot.spotId)} className="bg-lime-300 rounded p-1 m-2">Add Review</button>
        </div>
    );
}

SpotDetails.propTypes = {
    spot: PropTypes.object,
    onClickingEdit: PropTypes.func,
    onClickingDelete: PropTypes.func,
    onClickingReview: PropTypes.func,
    onClickingSalsa: PropTypes.func
};

export default SpotDetails;