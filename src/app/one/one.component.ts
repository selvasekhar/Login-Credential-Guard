import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { ServiceService } from '../service.service';
import { map, mergeMap } from 'rxjs';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit {
  getdatase:any;
  getproductsd:any
  categories: any;
  productseer:any;
  productsfinal:any
  constructor(private servicess:MasterService, private service:ServiceService){
    
  }

  ngOnInit(){
    // this.getdatas()
    // this.getproducts()

    this.twomerger().subscribe((m)=>{
      this.productsfinal= m

    })
  }

  getdatas(){
    this.servicess.getalldatasone().subscribe((e)=>{
      this.getdatase = e
    })
  }

    getproducts(){
    this.service.getalldatastwo().subscribe((d)=>{
      this.getproductsd = d
    })
  }


  twomerger(){
    return this.service.getalldatastwo().pipe(mergeMap((datas)=>{
      this.productseer = datas;
      return  this.servicess.getalldatasone().pipe(map((d)=>{
        this.categories =  d;
        return d;
    
    }))
  }));
  
}
}
