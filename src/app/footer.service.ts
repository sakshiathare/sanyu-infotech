
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  isFooterOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isFooterOpen = false;
    });
  }

  toggleFooter() {
    this.isFooterOpen = !this.isFooterOpen;
  }
}