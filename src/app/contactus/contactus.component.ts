import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  info = new FormGroup({
    name : new FormControl('',Validators.minLength(2)),
    lastName:new FormControl('',Validators.minLength(3)),
    eMail : new FormControl('',Validators.email),
    age: new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.info.valid)
    var a = this.info.value;
    console.table(a)
  }
}
