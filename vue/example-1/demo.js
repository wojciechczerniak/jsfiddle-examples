new Vue({
  el: "#example-1",
  data: function() {
    return {
      settings: {
        data: Handsontable.helper.createSpreadsheetData(50, 50),
        colHeaders: true,
        width: 500,
        height: 500
      }
    };
  },
  components: {
    HotTable: Handsontable.vue.HotTable
  }
});
