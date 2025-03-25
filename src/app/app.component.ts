import { AfterViewInit, Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos'

declare const require: any; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  ngOnInit(): void{
     AOS.init()
  }
  

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); 
      }
    });
  }
}
