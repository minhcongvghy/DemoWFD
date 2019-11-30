import { Component, OnInit } from '@angular/core';
import {Tag} from '../services/tag';
import {ActivatedRoute, Router} from '@angular/router';
import {TagService} from '../services/tag.service';

@Component({
  selector: 'app-delete-tag',
  templateUrl: './delete-tag.component.html',
  styleUrls: ['./delete-tag.component.scss']
})
export class DeleteTagComponent implements OnInit {
  private id: string;
  private tag: Tag

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

  deleteTag(){
    this.tagService.deleteTag(this.id).subscribe(
      result => {
        this.getTag(this.id);
        alert('Delete Successfully');
        this.router.navigateByUrl('/tag');
      }, error => {
        console.log(error);
      }
    );
  }

}
