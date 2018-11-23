let container = document.getElementById('example-2');

let hot = new Handsontable(container, {
  data: Handsontable.helper.createSpreadsheetData(50, 15),
  width: 800,
  height: 300,
  rowHeaders: false,
  colHeaders: false,
});
