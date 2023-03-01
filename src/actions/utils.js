export function GetSpotById(spotList, id) {
  for (let i = 0; i < spotList.length; i++) {
    if (spotList[i].spotId === id) {
      return spotList[i];
    }
  }
  return null
}

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