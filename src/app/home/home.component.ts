import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  delays: number[] = [250, 500, 750, 1000, 1250]; // Adjust the values as needed
  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
  }
  redirectToURL(url: string) {
    window.location.href = url;
}
  reset(){
    this.wowService.init();
  }
}
