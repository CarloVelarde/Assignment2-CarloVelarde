const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

let table = document.getElementById("population-table")
let tableBody = document.getElementById("t-body")

fetch(apiUrl)
  .then(response => {
   return response.json()
  })

  .then(data => {
   for (let i = data.data.length - 1; i >= 0; i--){
      let newRow = tableBody.insertRow() // Row for each year

      let yearCell = newRow.insertCell() // Year data
      let yearText = document.createTextNode(data.data[i]["Year"])
      yearCell.append(yearText)
      let popCell = newRow.insertCell() // Pop data
      let popText = document.createTextNode(data.data[i]["Population"].toLocaleString("en-US")) // Adds commas to the number
      popCell.append(popText)
   }
   
})

  .catch(error => {
   console.error("Error: ", error)
  });







// for (let i = 0; i<data.data.length; i++){
//    console.log(data.data[i]["Population"])
// }


 
