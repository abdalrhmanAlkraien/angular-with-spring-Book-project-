import { Author } from './../../Model/Author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  author:Author[]=[
    {
      id:1,
      firstName:"Abd",
      lastName:"Mohamd"
    },
    {
      id:1,
      firstName:"Abd",
      lastName:"Mohamd"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  deletefunc(auth:Author){
    this.author=this.author.filter(x=>{
      x.id==auth.id;
    });
  }

}
