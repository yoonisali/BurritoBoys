export function GetSpotById(spotList, id) {
  for (let i = 0; i < spotList.length; i++) {
    if (spotList[i].spotId === id) {
      return spotList[i];
    }
  }
  return null
}