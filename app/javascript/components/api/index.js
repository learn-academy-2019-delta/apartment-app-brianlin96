let getApartments = function() {
    return fetch('/apartments')
    .then((resp)=>{
      let json = resp.json()
      return json
    })
}

let findApartment = function (id) {
  return fetch('/apartments/'+ id)
  .then((resp)=>{
    let json = resp.json()
    return json
  })
}
export {
    getApartments, findApartment
}