import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { RestaurantService } from '../services/restaurant.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import {MatDialog} from '@angular/material/dialog'
import {DialogComponent} from '../dialog/dialog.component'

@Component({
  selector: 'app-list-restos',
  templateUrl: './list-restos.component.html',
  styleUrls: ['./list-restos.component.css']
})
export class ListRestosComponent implements OnInit {

  title = "Restaurants Available"
  restaurants: Restaurant[] = []
  delete: boolean = false

  constructor(
    private restaurantService: RestaurantService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.restaurantService.get().subscribe((data: []) => this.restaurants = data) 
  }

  deleteRestaurant(id: string){
    return this.restaurantService.delete(id).subscribe(() => {
    
      for(const obj in this.restaurants){
        if(String(this.restaurants[obj].id) === String(id)){
          this.restaurants.splice(Number(obj), 1)
          this.openSnackBar(id)
  
        }
      }
    })
    
  }

  openSnackBar(id: string){
    this.snackBar.open(`Restaurant with id: ${id} was deleted.`, 'x', {
      duration: 1200
    })
  }

  openDialog(id: string){
    const dialog = this.dialog.open(DialogComponent)

    dialog.afterClosed().subscribe(result => {
      if(result) this.deleteRestaurant(id)
      
    })
  }

}
