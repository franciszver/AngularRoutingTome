import { Router } from '@angular/router';
import { NavService } from './services/nav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (
    private navService: NavService,
    private router: Router
    ) { }

  takeMeToAlpha(nav: number): void {
    let link = ['/alphacomponent'];
    this.navService.updateNav(nav);
    this.router.navigate(link);
  }


}
