import { Injectable } from '@angular/core';
import { commonLinks } from '../../commonLinks';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private _http: HttpClient) { }

  searchByMovieName(movieName: string): Observable<any> {
    let url: string = commonLinks.apiLink + commonLinks.searchByMovieName + commonLinks.apikey + commonLinks.searchParams + '&query=' + movieName;
    return this._http.get(url);
  }
}
