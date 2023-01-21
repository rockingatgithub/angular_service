import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserListService } from './user-list.service';
import { FoodsComponent } from './foods/foods.component';
import { FoodlistService } from './foodlist.service';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    FoodsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserListService,
    FoodlistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
