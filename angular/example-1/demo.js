var Component = ng.core.Component;
var NgModule = ng.core.NgModule;
var FormsModule = ng.forms.FormsModule;
var BrowserModule = ng.platformBrowser.BrowserModule;
var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
var HotTableModule = Handsontable.angular.HotTableModule;

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
