import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  contact = {
    fullName: '',
    email: '',
    phoneNumber: '',
    address: ''
    
  };

  onSubmit(contactForm: NgForm) {
    if (contactForm.form.valid) {
      alert(`Hii ${this.contact.fullName} !! Thank You for contacting Us....!!!!`);
      contactForm.resetForm();
    } 
    else {
      alert('Please fill in all the required fields');
    }
  }
}