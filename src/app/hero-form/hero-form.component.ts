import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  submitted = false;

  onSubmit(form) {
    this.submitted = true;
    console.log('HELLO AGAIN', form.target.email.value);
  }

}
