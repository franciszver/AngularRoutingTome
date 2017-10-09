import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'betaComponent',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  title = 'beta';
  currNav: number;

  constructor( private navService: NavService, private router: Router) {

  }

  ngOnInit(): void {
    this.currNav = this.navService.getNav();
  }

  reloadAlpha(): void {
    let link = ['alphacomponent'];
    this.router.navigate(link);
  }

}
