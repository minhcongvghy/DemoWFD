import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Tag} from '../services/tag';
import {ActivatedRoute, Router} from '@angular/router';
import {TagService} from '../services/tag.service';

@Component({
  selector: 'app-update-tag',
  templateUrl: './update-tag.component.html',
  styleUrls: ['./update-tag.component.scss']
})
export class UpdateTagComponent implements OnInit {
  private id: string;
  private tag: Tag

  tagForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private activatedRoute: ActivatedRoute,
              private tagService: TagService,
              private router: Router) {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id;
      }
    );
  }

  ngOnInit() {
    this.getTag(this.id);
  }

  getTag(id: string) {
    this.tagService.findTagById(id).subscribe(
      result => {
        this.tag = result;
      }
    );
  }

  updateTag() {
    const {name} = this.tagForm.value;
    const formTag: Tag = {
      id: this.id,
      name
    };

    this.tagService.updateTagById(formTag).subscribe(
      result => {
        this.tag = result;
        this.getTag(this.id);
        alert('Update Successfully');
        this.router.navigateByUrl('/tag');
      }, error => {
        console.log(error);
      }
    );
  }

}
