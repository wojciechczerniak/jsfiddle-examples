const HotTable = Handsontable.react.HotTable;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = Handsontable.helper.createSpreadsheetData(50, 15);
  }

  render() {
    return React.createElement(
      HotTable,
      {
        data: this.handsontableData,
        colHeaders: true,
        rowHeaders: true,
        width: 500,
        height: 300,
      },
      null,
    );
  }
}

ReactDOM.render(App, document.getElementById('example1'));
