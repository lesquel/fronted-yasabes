import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'profile-layout',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class ProfileLayout {}
