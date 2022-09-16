import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-end-task',
  templateUrl: './front-end-task.component.html',
  styleUrls: ['./front-end-task.component.css']
})
export class FrontEndTaskComponent implements OnInit {

  constructor() { }

  parameter:any = window.location.search ;
  dataParameters:any[]=[]

  saveInLocalStorage(){
    if("param" in localStorage){
      this.dataParameters = JSON.parse(localStorage.getItem("param")!)
      let exist = this.dataParameters.find(item => item === this.parameter)
      if(!exist){
        this.dataParameters.push(this.parameter)
        localStorage.setItem("param", JSON.stringify(this.dataParameters))
      }
    }else  {
      this.dataParameters.push(this.parameter)
      localStorage.setItem("param", JSON.stringify(this.dataParameters))
    }
  }

  clearLocalStorage(){
    if(this.parameter === ""){
      localStorage.clear()
    }
  }

  ngOnInit(): void {
    this.saveInLocalStorage()
    this.clearLocalStorage()
  }

}
