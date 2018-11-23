new Vue({
  el: "#vue-app",
  data: function() {
    return {
      settings: {
        data: Handsontable.helper.createSpreadsheetData(50, 15),
        width: 800,
        height: 300,
        rowHeaders: false,
        colHeaders: false,
      }
    };
  },
  components: {
    HotTable: Handsontable.vue.HotTable
  }
});
