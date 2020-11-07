import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Restaurant, RestaurantForm } from '../models/Restaurant';
import { Stars } from '../models/Stars';
import { RestaurantService } from '../services/restaurant.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  title = "Update Restaurant"
  restaurant: Restaurant  = {id: Number(), name: String(), address: String(), stars: []}
  selected: number | string[]

  constructor(
      private restaurantService: RestaurantService,
      private route: ActivatedRoute,
      private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id

    this.restaurantService.getOne(id).subscribe((result: Restaurant) => {
      this.restaurant = result
      this.selected = this.stars[this.restaurant.stars.length-1].value
    })
     
  }

  stars: Stars[] = [
    {value: [""], viewValue: 'One star'},
    {value: ["", ""], viewValue: 'Two stars'},
    {value: ["","",""], viewValue: 'Three stars'},
    {value: ["","","",""], viewValue: 'Four stars'},
    {value: ["","","","",""], viewValue: 'Five stars'}
  ]

  updateRestaurant(data: RestaurantForm){
    this.restaurantService.patch(data, String(this.restaurant.id)).subscribe(result => {
      this.openSnackBar()
    })
  }

  openSnackBar(){
    this.snackBar.open('Restaurant updated successfully!', '!!!', {
      duration: 2000
    })
  }

}
