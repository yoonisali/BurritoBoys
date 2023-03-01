import React from "react";
import PropTypes from 'prop-types';

function SpotDetails(props) {
    const { spot } = props;

    return (
        <div>
            <h1>Spot Detail Page</h1>
            <p>{spot.name}</p>
            <p>{spot.state}</p>
            <p>{spot.city}</p>
            <p>{spot.address}</p>
            <p>{spot.website}</p>
            <p>{spot.averageRating}</p>
        </div>
    );
}

SpotDetails.propTypes = {
    spot: PropTypes.object,
    onClickingEdit: PropTypes.func,
    onClickingDelete: PropTypes.func,
};

export default SpotDetails;