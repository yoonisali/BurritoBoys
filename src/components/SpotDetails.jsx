import React from "react";
import Review from "./Review"
import Salsa from "./Salsa"
import PropTypes from 'prop-types';

function SpotDetails(props) {
    const { spot, onClickingReview, onClickingSalsa, ratingList, salsaList } = props;
    const spotReviews = ratingList.filter(rating => rating.spotId === spot.spotId);
    const spotSalsas = salsaList.filter(salsa => salsa.spotId === spot.spotId);

    return (
        <div>
            <h1>Spot Detail Page</h1>
            <p>{spot.name}</p>
            <p>{spot.state}</p>
            <p>{spot.city}</p>
            <p>{spot.address}</p>
            <p>{spot.website}</p>
            <p>{spot.averageRating}</p>

            <h1>Reviews List:</h1>
            <div>
            {spotReviews.map((rating) =>
                <Review
                rate= {rating.rate}
                spotId= {rating.spotId}
                />
                )}
            </div>

            <h1>Salsas List:</h1>
            <div>
            {spotSalsas.map((salsa) =>
                <Salsa
                name= {salsa.name}
                description= {salsa.description}
                spotId= {salsa.spotId}
                />
                )}
            </div>

            <button onClick={() => onClickingSalsa(spot.spotId)} className="bg-yellow-300 rounded p-1 m-2">Add Salsas</button><br />
            <button onClick={() => onClickingReview(spot.spotId)} className="bg-lime-300 rounded p-1 m-2">Add Review</button>
        </div>
    );
}

SpotDetails.propTypes = {
    spot: PropTypes.object,
    ratingList: PropTypes.array,
    salsaList: PropTypes.array,
    onClickingEdit: PropTypes.func,
    onClickingDelete: PropTypes.func,
    onClickingReview: PropTypes.func,
    onClickingSalsa: PropTypes.func
};

export default SpotDetails;