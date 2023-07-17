
window.addEventListener('load', function() {
    var tableBody = document.querySelector('#allCharacterTable tbody');
  
    // Fetch the CSV file from a different folder
    fetch('CSV_Files/characters_SR.csv')
      .then(function(response) {
        return response.text();
      })
      .then(function(csvData) {
        // Parse the CSV data
        var parsedData = Papa.parse(csvData, { header: true }).data;
  
        // Generate the table rows
        parsedData.forEach(function(rowData) {
          var row = document.createElement('tr');
  
          // Generate the table cells
          Object.values(rowData).forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
          });
  
          tableBody.appendChild(row);
        });
      })
      .catch(function(error) {
        console.error('Error fetching or parsing CSV file:', error);
      });
  });
  