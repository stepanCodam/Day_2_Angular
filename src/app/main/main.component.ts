import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cars: Array<{ img:string, brand:string,color:string}>=[{
    img:"https://mediapool.bmwgroup.com/cache/P9/202010/P90403620/P90403620-bmw-m4-competition-x-kith-10-2020-2002px.jpg",
    brand:"BMW",
    color:"black",
  },
  {
    img:"https://cdn.motor1.com/images/mgl/7xQZW/s1/2021-mercedes-amg-gt-stealth-edition.jpg",
    brand:"Mercedes",
    color:"black",
  },
  {
    img:"https://i.computer-bild.de/imgs/1/3/9/2/8/5/2/3/0x0-Cybertruck_01-34e3059e2d2f7970.jpg?impolicy=full_content",
    brand:"Tesla",
    color:"silver"
  }
    
]
  constructor() { }

  ngOnInit(): void {
  }

}
