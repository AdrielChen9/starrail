
window.addEventListener('load', function() {
  var tableBody = document.querySelector('#allCharacterTable tbody');


  //Constants 

  const columnPath = "Path";
  const columnElement = "Combat Types";
  
  // Fetch the CSV file from a different folder
  fetch('CSV_Files/characters_SR.csv')
    .then(function(response) {
      return response.text();
    })
    .then(function(csvData) {
      // Parse the CSV data
      var parsedData = Papa.parse(csvData, { header: true }).data;

      parsedData.forEach(function(rowData){
        //if column is "Path"
        if(columnPath in rowData){
          const columnLetter = rowData[columnPath];
          const firstLetter = columnLetter.charAt(0);

          switch(firstLetter.toLowerCase()){
            case 'p':
              rowData[columnPath] = "Preservation"
              break;
            case 't':
              rowData[columnPath] = "The Hunt"
              break;          
            case 'e':
              rowData[columnPath] = "Erudition"
              break;  
            case 'n':
              rowData[columnPath] = "Nihility"
              break;  
            case 'd':
              rowData[columnPath] = "Destruction"
              break;  
            case 'a':
              rowData[columnPath] = "Abundance"
              break; 
            case 'h':
              rowData[columnPath] = "Harmony"
              break;   
            default: 
              rowData[columnPath] = "n/a"
          }
        }
        //"Combat Types "
        if(columnElement in rowData){
          const columnLetter = rowData[columnElement];
          const firstLetter = columnLetter.charAt(0);
          const secondLetter = columnLetter.charAt(1); 
      
          switch(firstLetter.toLowerCase()){
            case 'f':
              rowData[columnElement] = "Fire"
              break;  
            case 'q':
              rowData[columnElement] = "Quantum"
              break;  
            case 'w':
              rowData[columnElement] = "Wind"
              break;  
            case 'p':
              rowData[columnElement] = "Physical"
              break; 
            case 'l':
              rowData[columnElement] = "Lightning"
              break;   
            default: 
              
                if(secondLetter ==='c'){
                  rowData[columnElement] = "Ice";
                }
                else{
                  rowData[columnElement] = "Imaginary";
                }
              
          }
        }
      });

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
