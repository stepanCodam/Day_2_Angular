import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  increase:number = 0;
  
  constructor() { }
  donation(){
    return this.increase += 10
  }
  ngOnInit(): void {
  }

}
