import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  links = [

    { path: '/', icon: 'home', title: 'Home'},

    { path: '/customers', icon: 'face', title: 'Customer'},

    { path: '/projects', icon: 'work', title: 'Projects'},

  ]
}
