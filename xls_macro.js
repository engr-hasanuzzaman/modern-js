// macron that will select random number of rows

function selectRandomColumns() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var selection = sheet.getSelection();
  var range = sheet.getActiveRange();
  var numRows = range.getNumRows();
  var numCols = range.getNumColumns();
  var startRow = range.getRow();
  var startCol = range.getColumn();
  var ui = SpreadsheetApp.getUi();
  var result = ui.prompt("Please enter the number of name that you want to select");
  var numToSelect = parseInt(result.getResponseText());

  // validation
  if (numToSelect >= numRows) {
    ui.alert("Please select the smaller value then number of selected names");
    return;
  }

  var rowNum;
  var i = 1;
  var randRows = [];
  var visited = [];
  //  select uniq row
  while (i <= numToSelect) {
    //Math.random() * (max - min) + min;
    rowNum = Math.floor(Math.random() * (numRows));

    if (!visited[rowNum]) {
      randRows.push(rowNum);
      visited[rowNum] = true;
      i = i + 1;
    }
  }

  for (var i = 0; i < randRows.length; i++) {
    range.getCell(startRow + randRows[i], startCol).setBackground('green');
  }

  ui.alert("Num of randomly selected item is " + numToSelect);
}