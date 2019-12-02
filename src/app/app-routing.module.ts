import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TagComponent} from './tag/tag.component';
import {DiaryComponent} from './diary/diary.component';
import {CreateTagComponent} from './create-tag/create-tag.component';
import {UpdateTagComponent} from './update-tag/update-tag.component';
import {DeleteTagComponent} from './delete-tag/delete-tag.component';
import {SearchTagComponent} from './search-tag/search-tag.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tag',
    component: TagComponent
  },
  {
    path: 'diary',
    component: DiaryComponent
  },
  {
    path: 'tag/create',
    component: CreateTagComponent
  },
  {
    path: 'tag/update/:id',
    component: UpdateTagComponent
  },
  {
    path: 'tag/delete/:id',
    component: DeleteTagComponent
  },
  {
    path: 'tag/search',
    component: SearchTagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
