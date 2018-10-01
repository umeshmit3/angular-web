import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/app.headerComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { HomeComponent } from './home/app.homeComponent';
import { MenuComponent } from './menu/app.menuComponent';
import { ProductsComponent } from './products/app.productsComponent';
import { SearchComponent } from './search/app.searchComponent';
import { IconboxComponent } from './iconbox/app.iconboxComponent';
import { RootContainer } from './rootContainer/app.rootContainerComponent';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ProductsComponent,
    SearchComponent,
    IconboxComponent,
    RootContainer
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootContainer]
})
export class AppModule { }
