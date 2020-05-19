import { EventEmitter, Injectable, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modalService: NgbModal) { }

  @Output()
  userClicked: EventEmitter<string> = new EventEmitter<string>();

  open(content: NgbModalRef) {
    this.modalService.open(content, {size: 'lg'});
  }

  userAction(action: string) {
    if(action.toLowerCase() === 'save') {
      this.userClicked.emit('save');
    }
  }

}
