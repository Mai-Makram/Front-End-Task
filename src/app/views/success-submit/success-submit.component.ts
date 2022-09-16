import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-submit',
  templateUrl: './success-submit.component.html',
  styleUrls: ['./success-submit.component.css']
})
export class SuccessSubmitComponent implements OnInit {

  constructor() { }
  dataSubmit:any = {}

  getSubmitData(){
    this.dataSubmit =  JSON.parse(localStorage.getItem("submitData")!)
    console.log(this.dataSubmit)
  }

  ngOnInit(): void {
    this.getSubmitData()
  }

}
