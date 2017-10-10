import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tutor',
  templateUrl: './search-tutor.component.html',
  styleUrls: ['./search-tutor.component.css']
})
export class SearchTutorComponent implements OnInit {
  subjects:string[]

  constructor() { }

  ngOnInit() {
    this.subjects =["CS","Civil","Mechanical"]
  }

}
