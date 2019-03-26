import { Component, OnInit } from '@angular/core';
import { BdayService } from '../services/bday';
import { Bday } from '../model/bday.model';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css'],
  providers: [BdayService]
})
export class EnrollComponent implements OnInit {

  enroll: Bday;
  constructor(private srvcBday: BdayService) { this.enroll = new Bday(); }

  ngOnInit() {
    // this.enroll.id = 1;
    // this.enroll.firstName = "FirstName";
    // this.enroll.lastName = "last";
    // this.enroll.middleName = "middle";
    // this.enroll.aliasName = "alia";
    // this.enroll.birthDate = new Date();
    // this.enroll.email = "test4@gmail.com";
    // this.enroll.mobileNumber = 32;
    // this.srvcBday.createBuddy(this.enroll);

    // this.srvcBday.getBuddy().subscribe(data=>{
    //   console.log(data);
    // })
  }

  saveBuddy(){
    this.enroll.id=4; 
    console.log('save',this.enroll);
    this.srvcBday.createBuddy(this.enroll);
  }
}
