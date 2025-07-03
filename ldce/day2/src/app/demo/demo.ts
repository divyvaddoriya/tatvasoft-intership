import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})

export class Demo {
  name = '';
  email = '';
  onClick(){
     console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log("button has been clicked");
  }
}
