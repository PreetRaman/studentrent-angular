import { Component, OnInit } from '@angular/core';
import {AuthService} from '../providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  title:any;
  owner:any;
  city:any;
  bedrooms:any;
  price:any;
  type:any;
  image:any;
  address:any;
  room:any;
  total:any;
  uni:any;
  desc:any;
  trans:any;
  contact:any;
  email:any;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedrooms:this.bedrooms,
      price: this.price,
      type: this.type,
      address:this.address,
      room:this.room,
      total:this.total,
      uni:this.uni,
      desc:this.desc,
      trans:this.trans,
      contact:this.contact,
      email:this.email
    }

    this.authService.addListing(listing);
    this.router.navigate(['']);
  }
}
