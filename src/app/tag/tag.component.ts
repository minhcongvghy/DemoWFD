import { Component, OnInit } from '@angular/core';
import {TagService} from '../services/tag.service';
import {Tag} from '../services/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  listTag: Tag[] = [];
  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.getListTag();
  }

  getListTag() {
    this.tagService.getListTag().subscribe(
      result => {
        this.listTag = result;
      }, error => {
        console.log(error);
      }
    );
  }

}
