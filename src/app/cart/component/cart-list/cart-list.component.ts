import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartList:any[]=[]
  totalPrice:number=0
  fullName:string = ""

  constructor(private router:Router) { }

  getCartList(){
    if("cart" in localStorage){

      this.cartList = JSON.parse(localStorage.getItem("cart")!)
    }
    console.log(this.cartList)
    
    this.getTotalPrice()
  }

  getTotalPrice(){
    this.totalPrice =0
    for(let x in this.cartList){
      this.totalPrice += this.cartList[x].item.price * this.cartList[x].quantity
    }
  }

  inputChange(){
    localStorage.setItem("cart", JSON.stringify(this.cartList))
    this.getTotalPrice()
  }

  saveSubmitData(){
    localStorage.setItem("submitData" , JSON.stringify({name:this.fullName ,totalprice:this.totalPrice}))
  }

  detectChanges(event:any){
    this.fullName =event.target.value
    console.log(this.fullName)
    this.saveSubmitData()
  }

  deleteProductCart(i:number){
    this.cartList.splice(i ,1)
    localStorage.setItem("cart", JSON.stringify(this.cartList))
    this.getTotalPrice()
  }

  
  submit(){
    localStorage.removeItem("cart")
    this.router.navigateByUrl("/submit")
  }

  ngOnInit(): void {
    this.getCartList()
    this.saveSubmitData()
  }

}
