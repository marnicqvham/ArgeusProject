import { ThrowStmt } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DBconnectService } from '../DBconnect.service';

@Component({
  selector: 'app-crudView',
  templateUrl: './crudView.component.html',
  styleUrls: ['./crudView.component.css']
})

export class CrudViewComponent implements OnInit {

  public id: number;


  person = {
    id: "",
    name: "",
    lastName: "",
    minor: "",
    resident: "",
    email: "",
    nationalNumber: "",
    address: {
      id: 1,
      street: "",
      postcode: "",
      city: "",
      country: ""
    },
    birthPlace: "",
    dateOfBirth: "",
    maritalStatus: "",
    partnerName: ""
  };

  persons = new Array;




  constructor(
    public dbConnectService: DBconnectService) { }

  ngOnInit(): void {
    this.dbConnectService.getAll().subscribe(
      persons => this.persons = persons
    )
  }


  getId() {
    console.log(this.dbConnectService.get(this.id))
  }
}
