import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  foodList :Food[] = []

  constructor() { }

  getFoods () {
    return this.foodList
  }

  addFood (food :any) {
    this.foodList.push(food)
  }

  deleteFood (i: number) {
    this.foodList.splice(i, 1)
  }

  updateFood (food : Food, i: number) {
    this.foodList.splice(i, 1, food)
  }

}
