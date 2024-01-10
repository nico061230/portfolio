import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isToggle = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isToggle = !this.isToggle;
    console.log(this.isToggle)
  }

}
