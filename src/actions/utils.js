export function GetSpotById(spotList, id) {
  for (let i = 0; i < spotList.length; i++) {
    if (spotList[i].spotId === id) {
      return spotList[i];
    }
  }
  return null
}

//Function for creating and updating
//url = "/api/[Spot, Rating, or Salsa]"
//method = "POST or PUT"
//obj = data to be sent
export async function BodyFetch(url, method, obj) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      "method": method,
      "headers": {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify(obj)
    }).then((res) => {
      res.json()
        .then((jres) => {
          console.log(`Fetch response: ${JSON.stringify(jres)}`)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
      .catch((err) => {
        reject(err)
      })
  })
}

//Function for deleting spot, rating, or salsa
//type = "Spot, Rating, or Salsa"
//id = id to be deleted
export async function deleteFetch(type, id) {
  return new Promise((resolve, reject) => {
    fetch(`/api/${type}/${id}`, {
      "method": "DELETE"
    }).then((res) => {
      res.json()
        .then((jres) => {
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
      .catch((err) => {
        reject(err)
      })
  });
}