const HotTable = Handsontable.react.HotTable;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = Handsontable.helper.createSpreadsheetData(50, 15);
  }

  render() {
    return (
      <div>
        <HotTable
          id="hot"
          data={this.handsontableData}
          colHeaders={true}
          rowHeaders={true}
          width={800}
          height={300}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('example1'));
