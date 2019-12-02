import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { TagComponent } from './tag/tag.component';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { DeleteTagComponent } from './delete-tag/delete-tag.component';
import { UpdateTagComponent } from './update-tag/update-tag.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchTagComponent } from './search-tag/search-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    TagComponent,
    CreateTagComponent,
    DeleteTagComponent,
    UpdateTagComponent,
    HomeComponent,
    SearchTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
