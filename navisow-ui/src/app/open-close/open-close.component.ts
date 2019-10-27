import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.sass']
})
export class OpenCloseComponent implements OnInit {

  constructor(protected router: Router, 
    protected keycloakAngular: KeycloakService) { }

  ngOnInit() {
    try {
      let userDetails = this.keycloakAngular.getKeycloakInstance().tokenParsed["userDetails"];
    } catch (e) {
      console.log('Failed to load user details', e);
    }
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
