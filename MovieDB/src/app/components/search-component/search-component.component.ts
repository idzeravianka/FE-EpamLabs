import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  constructor(private _searchService: SearchServiceService) { }

  ngOnInit() {
    this._searchService.searchByMovieName('fury').subscribe(response => console.log(response));
  }

}
