import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from '../shared/services/modal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  formGroup: FormGroup;

  public submitted: boolean = false;

  @Input()
  userClicked: string;

  constructor(
    public formBuilder: FormBuilder,
    public modalService: ModalService
  ) {
    modalService.userClicked.subscribe((action: string) => {
      if(action === 'save') {
        this.onSubmit();
      }
    })
  }

  ngOnInit(): void {
    this.setValidation();
  }

  setValidation() {
    this.formGroup = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      uniqueId: [''],
      mobile: [''],
      email: ['']
    })
  }

  onSubmit() {
    if(this.formGroup.valid) {

    }
  }

}
