import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminAccount } from './admin-account';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {
  adminAccountForm: FormGroup;
  adminAccount = new AdminAccount();
  adminGroupsDTOLists = [];

  constructor(private fb: FormBuilder) {
    this.adminGroupsDTOLists = ['admin', 'test'];
   }

  ngOnInit() {
    this.adminAccountForm = this.fb.group({
      loginName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
      fullName: ['', Validators.required],
      adminDescription: ['', Validators.required],
      adminGroupId: 'admin'
    });
    console.log('this.adminAccountForm : ', this.adminAccountForm);
  }

  updateData(): void {
    this.adminAccountForm.patchValue({
      loginName: 'test'
    });
  }

  save() {
    console.log('reactive form data : ', this.adminAccountForm.value);
  }

}
