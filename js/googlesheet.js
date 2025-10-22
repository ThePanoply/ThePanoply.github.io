// Grab the sheet ID from the URL
const SHEET_ID = "10dt27NU05LcEZJcv1qyzAM1yOFAejA7Fx7QS2BzzyYs";

// Build the CSV export URL
const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

// Simple CSV parser (splits on newlines and commas)
// For more robust parsing, use PapaParse or a similar library
async function loadSheetAsCsv() {
  const response = await fetch(csvUrl);
  if (!response.ok) throw new Error("Network response was not ok");
  const csvText = await response.text();

  const rows = csvText
    .trim()
    .split("\n")
    .map((row) => row.split(","));
  // `rows[0]` now holds the header, `rows[1...]` the data
  console.log("CSV rows:", rows);
  return rows;
}

const loadTable = async () => {
  const rows = await loadSheetAsCsv().catch(console.error);
  console.log({ headerrow: rows[0] });

  const table = document.getElementById("gigs");

  // headers
  const headerRow = document.createElement("tr");
  rows[0].map((column) => {
    const headerColumn = document.createElement("th");
    headerColumn.innerText = column;
    headerRow.appendChild(headerColumn);
  });
  table.appendChild(headerRow);

  // rows
  for (let i = 1; i < rows.length; i++) {
    const tableRow = document.createElement("tr");
    let columnHeader = "";

    for (let j = 0; j < rows[i].length; j++) {
      const columnElm = document.createElement("td");
      const column = rows[i][j];

      if (column[column.length - 1] === '"') {
        // End of place
        columnHeader = `${columnHeader}${column.replace('"', "")}`;
        columnElm.innerText = columnHeader;
        tableRow.appendChild(columnElm);
      } else if (column[0] === '"') {
        columnHeader = column.replace('"', "");
      } else {
        columnElm.innerText = column;
        tableRow.appendChild(columnElm);
      }

      table.appendChild(tableRow);
    }
  }
};

loadTable();
