import { Component } from '@angular/core';
import { Goal } from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  goals:Goal [] = [
    {id:1, name: 'Watch Finding Nemo', description:'Movie'},
    {id:2, name:'Buy Cookies',description:'Movie'},
    {id:3, name:'Get new Phone Case',description:'Movie'},
    {id:4, name:'Get Dog Food', description:'Movie'},
    {id:5, name:'Solve mat homework', description:'Movie'},
    {id:6, name:'Plot my world domination plan', description:'Movie'},

  ];

}
