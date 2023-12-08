import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';

@Component({
  selector: 'app-add-uni',
  templateUrl: './add-uni.component.html',
  styleUrls: ['./add-uni.component.css']
  
})
export class AddUniComponent {
  university :Universite =new Universite();
  
  
  

  constructor(private ac: ActivatedRoute,private us:UniversiteServiceService){
  }
  ngOnInit(){

  }
  addUniversity(){
    console.log("pressed on add")
  this.us.addUniversite(this.university).subscribe();
  
  }
  test(err: any){
    console.log(err);
  }

}
