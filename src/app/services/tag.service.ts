import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tag} from './tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  URL_TAG = 'http://localhost:8080/api/auth/tag/';

  constructor(private http: HttpClient) { }

  getListTag(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.URL_TAG);
  }

  findTagById(id: string): Observable<Tag> {
    return this.http.get<Tag>(this.URL_TAG + id);
  }

  updateTagById(tag: Tag): Observable<Tag> {
    return this.http.put<Tag>(this.URL_TAG + tag.id, tag);
  }

  deleteTag(id: string): Observable<void> {
    return this.http.delete<void>(this.URL_TAG + id);
  }

  createTag(tag: Tag): Observable<Tag> {
    return this.http.post(this.URL_TAG, tag);
  }

  searchTagByName(tag: Tag): Observable<Tag[]> {
    return this.http.post<Tag[]>(this.URL_TAG + 'search-by-name', tag);
  }
}
