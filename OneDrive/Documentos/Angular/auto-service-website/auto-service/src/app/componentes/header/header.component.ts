import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public openClose: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  public menu() {
    this.openClose = !this.openClose;
  }
}
