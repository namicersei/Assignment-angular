import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Submit(email: string , phone: string) {

// '^[a-zA-Z0-9-+_.]+@[a-z]+\.[a-z]{2,3}$'
// \.(com|edu|in|net)
// [a-z]{2,3}
const trigger_email = email;
   const regexp = new RegExp('^[a-zA-Z0-9-+_.]+@[a-z]+\.(com|edu|in|net)$'),
    test = regexp.test(trigger_email);
    console.log(test);

    if (!test) {
alert('Invalid mail id!');
    }
const trigger_number = phone;
const regexp2 = new RegExp('');
const test2 = regexp2.test(trigger_number);

if (!test2) {
alert('Invalid number');
}


  }

}

