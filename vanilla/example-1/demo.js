document.addEventListener('DOMContentLoaded', function(){
  var container = document.getElementById('container');
  var hot;

  hot = new Handsontable(container, {
    data: Handsontable.helper.createSpreadsheetData(50, 15),
    width: 500,
    height: 300,
    rowHeaders: true,
    colHeaders: true,
  });
}, false);