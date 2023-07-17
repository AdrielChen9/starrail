document.addEventListener("DOMContentLoaded", function(){
    fetch(characters_SR.csv)
        .then(response => response.text())
        .then(data => {
            //Split CSV into rows and columns
            const rows = data.split("\n");
            const table = document.getElementById("csvTable");

            //Create table headers 
            const headers = row[0].split(",");
            const headerRow = document.createElement("tr");
            headers.forEach(header => {
                const th = document.createElement("th");
                th.textContent = header; 
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow); 

            //create Table rows 
            for (let i = 1; i < rows.length; i++){
                const rowData = rows[i].split(",");
                const row = document.createElement("tr");
                rowData.forEach(cellData => {
                    const cell = document.createElement("td");
                    cell.textContent = cellData;
                    row.appendChild(cell);
                });
                table.appendChild(row);
            }
        })
        .catch(error => console.log("Error:", error));
});