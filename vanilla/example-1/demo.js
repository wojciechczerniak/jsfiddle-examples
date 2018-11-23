let container = document.getElementById('example-1');

let hot = new Handsontable(container, {
  data: Handsontable.helper.createSpreadsheetData(50, 15),
  width: 500,
  height: 300,
  rowHeaders: true,
  colHeaders: true,
});
