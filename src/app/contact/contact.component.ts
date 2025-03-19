import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.http.post('http://localhost:8080/api/forms/submit', this.contactForm.value)
        .subscribe(
          response => {
            alert('Message sent successfully!');
            this.contactForm.reset();
          },
          error => {
            console.error('Error:', error);
            alert('Something went wrong!');
          }
        );
    } else {
      alert('Please fill all required fields!');
    }
  }
}
