import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TagService} from '../services/tag.service';
import {Tag} from '../services/tag';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.scss']
})
export class CreateTagComponent implements OnInit {
  private id: string;
  private tag: Tag;
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

  createTag() {
    const {name} = this.tagForm.value;
    const formTag: Tag = {
      name
    };
    this.tagService.createTag(formTag).subscribe(
      result => {
        alert('Create Successfully');
        this.router.navigateByUrl('/tag');
      }
    );
  }

}
