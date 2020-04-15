import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'med-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuCollapsed: boolean;

  constructor(private router: Router) {
    this.isMenuCollapsed = true;
  }

  ngOnInit() {
  }

  goTo(selector: string, event: Event) {
    if (selector === '#specialty' || selector === '#contact') {
      event.preventDefault();
      this.router.navigateByUrl('/home').then(() => {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      });
    }
  }

}
