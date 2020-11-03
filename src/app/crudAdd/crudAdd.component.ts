import { Component, OnInit } from '@angular/core';
import { DBconnectService } from '../DBconnect.service';

@Component({
  selector: 'app-crudAdd',
  templateUrl: './crudAdd.component.html',
  styleUrls: ['./crudAdd.component.css']
})
export class CrudAddComponent implements OnInit {

  person = {
    name: "",
    lastName: "",
    minor: "",
    resident: "",
    email: "",
    nationalNumber: "",
    address: {
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

  constructor(
    public dbConnectService: DBconnectService) { }

  ngOnInit() {
  }

  async addPerson() {
    this.dbConnectService.create(this.person);
  }

}
