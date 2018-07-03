import { Component, OnInit } from '@angular/core';
import { Razor } from '../core/razor';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { timingSafeEqual } from 'crypto';
declare const Razorpay: any;


@Component({
  selector: 'app-razor',
  templateUrl: './razor.component.html',
  styleUrls: ['./razor.component.css']
})
export class RazorComponent implements OnInit {
key: string;
payForm = new FormGroup ({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    description: new FormControl(),
    pmail: new FormControl(),
    pname: new FormControl(),
    amount: new FormControl()


  });
  constructor() { }

  ngOnInit() {
  }


  onPay() {

  const options = {
        key : 'rzp_test_NVyYgiHiztwDQN',
        amount: this.payForm.controls.amount.value * 100,
        name: this.payForm.controls.name.value,
        description: this.payForm.controls.description.value,
        image: '/your_logo.png',
        handler: function (response) {
            alert('Payment Succesfull');
        },
        prefill: {
            name: this.payForm.controls.pname.value,
            email: 'nami@gmail.com'
        },
        notes: {
            address: 'Hello World'
        },
        theme: {
            'color': '#F37254'
        }
    };
    const rzp1 = new Razorpay(options);
   rzp1.open();
   console.log(this.payForm.controls.pmail.value);
  }

}
