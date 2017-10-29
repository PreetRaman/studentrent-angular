import { Component, OnInit } from '@angular/core';
import {AuthService} from '../providers/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id:any;
  listing: any;
  imageUrl:any;

  constructor(
    private authService: AuthService,
    private router:Router,
    private route:ActivatedRoute
  ) { }
  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    this.authService.getListingDetails(this.id).subscribe((listing:any) => {
      this.listing = listing;
      console.log(listing);
        let storageRef = firebase.storage().ref();
        let spaceRef = storageRef.child(listing.path);
        storageRef.child(listing.path).getDownloadURL().then((url) => {
          // Set image url
        this.imageUrl = url;
       }).catch((error) => {
        console.log(error);
      });

      })

  }
}
