import { Component, OnInit } from '@angular/core';
import {TagService} from '../services/tag.service';
import {Tag} from '../services/tag';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {

  private id: string;
  private tag: Tag;
  tagList: Tag[] = [];
  tagForm = new FormGroup({
    name: new FormControl('')
  });
  // tagName: '';

  constructor(private tagService: TagService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id;
      }
    );
  }

  ngOnInit() {

  }

  // getTagList() {
  //   this.tagService.getListTag().subscribe(
  //     result => {
  //       this.tagList = result;
  //     }, error => {
  //       console.log(error);
  //     }
  //   );
  // }

  searchTag() {
    const {name} = this.tagForm.value;
    const tag: Tag = {
      id: this.id,
      name
    };
    this.tagService.searchTagByName(tag).subscribe(
      result => {
        this.tagList = result;
      }, error => {
        console.log(error);
      }
    );
  }

}
