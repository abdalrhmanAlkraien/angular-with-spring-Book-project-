import { Author } from './../../Model/Author';
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  @Input() authors:Author;
  @Output() deleteEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  OnDelete(auth:any)
  {
      this.deleteEvent.emit(auth);
  }

}
