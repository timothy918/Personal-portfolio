const fetchButton = document.getElementById("fetch");
const CSVButton = document.getElementById("CSV");
const clearButtin = document.getElementById("clear");
const securityField = document.getElementById("security");
const marketField = document.getElementById("Market");

clearButtin.addEventListener("click", function () {
  const tBody = document.querySelector("tbody");
  tBody.innerHTML = "";
});
// fetchButton.addEventListener("click", async function () {
//   targetURL = "https://ca.finance.yahoo.com/quote/7374.HK/history/";
//   fetch("http://localhost:3000/yahoo")
//     .then((response) => response.text())
//     .then((data) => {
//       console.log(data); // Data from Yahoo Finance
//     })
//     .catch((error) => console.error("Failed to fetch data:", error));
// });
CSVButton.addEventListener("click", function () {
  const table = document.getElementById("tableId"); // Select the table element by ID
  let csv = "";
  // Loop through each row of the table
  for (let row of table.rows) {
    let rowData = [];
    // Loop through each cell in the row
    for (let cell of row.cells) {
      let cellText = cell.innerText.replace(/,/g, " "); // Replace any commas within the cell text to avoid CSV issues
      rowData.push(cellText);
    }
    csv += rowData.join(",") + "\n"; // Join the cells with commas, then add a newline to end the row
  }
  const filename = `${securityField.value}_${marketField.value}`;
  const csvBlob = new Blob([csv], { type: "text/csv" }); // Create a Blob from the CSV string
  const csvUrl = URL.createObjectURL(csvBlob); // Create a URL for the Blob
  // Confirm before downloading
  if (confirm(`Do you want to download the CSV file as '${filename}'?`)) {
    const link = document.createElement("a"); // Create a link to download the CSV file
    link.href = csvUrl;
    link.download = filename;
    link.click(); // Trigger the download
    URL.revokeObjectURL(csvUrl); // Clean up the URL object
  }
});
