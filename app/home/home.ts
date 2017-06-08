import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `<h1>Welcome {{name}}</h1>`
})

export class HomeComponent { name = 'Home';}
