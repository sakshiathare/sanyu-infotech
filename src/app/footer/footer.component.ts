import { Component } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public footerService: FooterService) {}

  toggleFooter() {
    this.footerService.toggleFooter();
  }
}