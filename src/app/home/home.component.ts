import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
  }

  signup() {
    this.route.navigate(['signup'], { relativeTo: this.router});
  }
  signin() {
    this.route.navigate(['signin'], { relativeTo: this.router});
  }

  home(){
    this.route.navigate(['/home']);
  }
}
