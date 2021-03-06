import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Profile } from '../../shared/Profile';
import { HttpService } from '../../shared/http.service';


function emailMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');
  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }
  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return  (c: AbstractControl): {[key: string]: boolean} | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  };
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  profile: Profile = new Profile();
  emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.'
  };


  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
        confirmEmail: ['', Validators.required],
      }, {validator: emailMatcher}),
      phone: '',
      notification: 'email',
      rating: ['', ratingRange(1, 5)],
      sendCatalog: true,
      addresses: this.fb.array([ this.buildAddress() ])
    });

    this.profileForm.get('notification').valueChanges
      .subscribe(value => this.setNotification(value));

    console.log(this.profileForm);

  }

  get addresses(): FormArray {
    return <FormArray>this.profileForm.get('addresses');
  }


  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  deleteAddress(i: number): void {
    if (i !== 0) {
      this.addresses.removeAt(i);
    } else {
      alert('Minimum One address required');
    }
  }
  populateTestData(): void {
    this.profileForm.patchValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      sendCatalog: false
    });
  }

  save(): void {
    console.log(this.profileForm);
    console.log('Saved: ' + JSON.stringify(this.profileForm.value));
    this.httpService.updateProfile(this.profileForm.value).subscribe();
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.profileForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

}
