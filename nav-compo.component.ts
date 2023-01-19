import { Component } from '@angular/core';
import { ServiceFileService } from './Service File/service-file.service';

@Component({
  selector: 'app-nav-compo',
  templateUrl: './nav-compo.component.html',
  styleUrls: ['./nav-compo.component.css']
})
export class NavCompoComponent {
dataStored:any;

  Messge : any ="THERE ARE NO PRODUCTS"
  data: any;
  constructor (private mySer:ServiceFileService) { };

  ngOnInit(): void{
//  this.reciveGetApiData();
  }


  CancelCell(frm:any){
 console.log("CancelSale")

  }


  ProcessCell(frm1 :any){
  console.log("ProcessSale")
  }



  //  reciveGetApiData(){
  //   this.mySer.getUser().subscribe(
  //      (res)=>{
  //      console.log(res);
  //        this.dataStored=res;

  //    },
  //      (err)=>{
  //      console.log(err);
  //      }
  //    )
  //  }




}
