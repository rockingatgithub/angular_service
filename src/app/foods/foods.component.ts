import { Component } from '@angular/core';
import { Food } from '../food.model';
import { FoodlistService } from '../foodlist.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {

  foodList :Food[] = []
  isUpdateForm: boolean = false

  constructor (private foodService : FoodlistService) {
    this.foodList = foodService.getFoods()
  }

  addFoodToList (food :any){
    this.foodService.addFood(food.value)
  }

  deleteFoodFromList (name :string) {
    const index = this.foodList.findIndex(foodItem => foodItem.name === name)
    this.foodService.deleteFood(index)
  }

  updateFoodFromList (food: Food, foodName: string) {
    const index = this.foodList.findIndex(foodItem => foodItem.name === foodName)
    this.foodService.updateFood(food, index)
  }

  toggleForm () {
    this.isUpdateForm = !this.isUpdateForm
  }

}
