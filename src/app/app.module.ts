import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FriandisesListComponent } from './components/friandises-list/friandises-list.component';
import { AddFriandiseComponent } from './components/add-friandise/add-friandise.component';
import { FriandiseDetailsComponent } from './components/friandise-details/friandise-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FriandisesListComponent,
    AddFriandiseComponent,
    FriandiseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
