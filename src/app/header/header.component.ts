import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  showHome() {
    this.router.navigate(['']);
  }

  showRecipes() {
    this.router.navigate(['recipes'], { relativeTo: this.activatedRoute });
  }

  showShoppingList() {
    this.router.navigate(['shoppinglist'], { relativeTo: this.activatedRoute });
  }

  ngOnInit() {}
}
