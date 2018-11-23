let Component = ng.core.Component;
let NgModule = ng.core.NgModule;
let FormsModule = ng.forms.FormsModule;
let BrowserModule = ng.platformBrowser.BrowserModule;
let platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
let HotTableModule = Handsontable.angular.HotTableModule;

@Component({
  selector: 'my-app',
  template: '<hot-table></hot-table>'
})
class AppComponent  {}

@NgModule({
  imports:      [ BrowserModule, FormsModule, HotTableModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
}).catch(err => { console.error(err) });
