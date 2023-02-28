import * as c from './ActionTypes';

export const getAllSpots = (spotList) => ({
  type: c.GET_ALL_SPOTS,
  spotList
});

export const getAllSpotsFailure = (error) => ({
  type: c.GET_ALL_SPOTS_FAILURE,
  error
});
