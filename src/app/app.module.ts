
import { NgModule, Inject, Injectable, Component, Directive, Injector, ElementRef } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, downgradeInjectable, UpgradeComponent } from '@angular/upgrade/static';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ng1-foo-component'
})
export class Ng1FooDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ng1FooComponent', elementRef, injector);
  }
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'root-component',
  template: '<div>Root</div><ng1-foo-component></ng1-foo-component>'
})
export class RootComponent {
    constructor() {
      console.log('RootComponent')
    }
}


@NgModule({
  imports: [ BrowserModule, UpgradeModule ],
  declarations: [ RootComponent, Ng1FooDirective ],
  bootstrap: [ RootComponent ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    // this.upgrade.bootstrap(document.body, ['demo'], { strictDi: true });
  }
}


