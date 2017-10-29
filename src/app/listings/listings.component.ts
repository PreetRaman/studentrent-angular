import { Component, OnInit } from '@angular/core';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings:any;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings = listings;
    });
  }

}
