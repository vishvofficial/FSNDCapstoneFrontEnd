import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task Tracker';

  constructor(public modalService: ModalService) {
  }

  links = [

    { path: '/student', icon: 'assignment', title: 'Assigned'},

    { path: '/inReview', icon: 'visibility', title: 'Reviewing'},

    { path: '/completed', icon: 'assignment_turned_in', title: 'Completed'},

    { path: '/rejected', icon: 'highlight_off', title: 'Rejected'},

    { path: '/teacher', icon: 'assignment', title: 'Assign'},

    { path: '/forReview', icon: 'find_in_page', title: 'To Review'},

  ]

  viewProfile(content) {
    this.modalService.open(content);
  }

  saveProfile() {
    this.modalService.userAction('save');
  }
}
