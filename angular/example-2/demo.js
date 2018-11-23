// app.component.ts
let Component = ng.core.Component;

@Component({
  selector: 'app-root',
  template: `
  <div>
    <hot-table
      class="hot"
      [data]="dataset"
      [colHeaders]="true"
      [rowHeaders]="true">
        <hot-column data="id" [readOnly]="true" title="ID"></hot-column>
        <hot-column data="name" title="Full name"></hot-column>
        <hot-column data="address" title="Street name"></hot-column>
    </hot-table>
  </div>
  `,
})
class AppComponent {
  dataset = [
    {id: 1, name: 'Ted Right', address: 'Wall Street'},
    {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
    {id: 3, name: 'Joan Well', address: 'Broadway'},
    {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
    {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
    {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
    {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
    {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
  ];
}

// app.module.ts
let NgModule = ng.core.NgModule;
let BrowserModule = ng.platformBrowser.BrowserModule;
let HotTableModule = Handsontable.angular.HotTableModule;

@NgModule({
  imports:      [ BrowserModule, HotTableModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

// bootstrap
let platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => { console.error(err) });

