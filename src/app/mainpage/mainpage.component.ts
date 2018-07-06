import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {


  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }

  signin() {
    this.route.navigate(['home/signin']);
  }
}
