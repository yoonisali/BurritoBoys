import * as c from '../actions/ActionTypes';

const spotsReducer = (state, action) => {
    switch (action.type) {
        case c.GET_ALL_SPOTS:
            return {
                ...state,
                isLoaded: true,
                spotList: action.spotList
            };
        case c.GET_ALL_SPOTS_FAILURE:
            return {
                ...state,
                isLoaded: true,
                error: action.error
            };
        default:
            throw new Error(`There is no action matching ${action.type}.`);
    }
};

export default spotsReducer;