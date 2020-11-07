import { Component, OnInit } from '@angular/core';
import { RestaurantForm } from '../models/Restaurant';
import { Stars } from '../models/Stars';
import { RestaurantService } from '../services/restaurant.service';
import {catchError} from 'rxjs/operators'
import {throwError} from 'rxjs'
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  title = "Add a restaurant"
  created = false
  errorMsg: string

  stars: Stars[] = [
    {value: [""], viewValue: 'One star'},
    {value: ["", ""], viewValue: 'Two stars'},
    {value: ["","",""], viewValue: 'Three stars'},
    {value: ["","","",""], viewValue: 'Four stars'},
    {value: ["","","","",""], viewValue: 'Five stars'}
  ]

  constructor(
      private restaurantService: RestaurantService,
      private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  createRestaurant(values: RestaurantForm){
    this.restaurantService.post(values)
    .pipe(
      catchError(error => {
        console.error(error.message)
        this.errorMsg = 'An error has occurred. Try again later.'

        return throwError(error.message)
      })
    ).subscribe(() => {
        this.created = true
        this.openSnackBar()
      })
    
  }

  openSnackBar(){
    this.snackBar.open('Restaurant created successfully!', 'x', {
      duration: 4000
    })
  }

  closeErrorMsg(){
    this.errorMsg = ""
  }

}
