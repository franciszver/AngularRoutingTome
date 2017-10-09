import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'alphaComponent',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit, OnChanges {
  title = 'alpha';
  currNav: number;

  constructor ( private navService: NavService, private router: Router) {}

  ngOnInit(): void {
    this.currNav = this.navService.getNav();
  }

  ngOnChanges(): void {
    this.currNav = this.navService.getNav();
  }

  takeMeToBeta(nav: number): void {
    let link = ['/alphacomponent/betacomponent'];
    this.navService.updateNav(nav);
    this.router.navigate(link);
  }
}
