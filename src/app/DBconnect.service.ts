import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const db = 'http://localhost:8085/persons';

@Injectable({
  providedIn: 'root'
})

export class DBconnectService {
  person = null;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Person[]>(db);
  }
  get(id) {
    this.http.get<{ id: number, name: string, lastName: string, minor: string, resident: string, email: string, nationalNumber: number, address: { string, id: number, street: string, postcode: number, city: string, country: string }, birthPlace: string, dateOfBirth: string, maritalStatus: string, partnerName: string }[]>(db).subscribe(
      person => {
        for (let index = 0; index < person.length; index++) {
          if (person[index].id == id) {
            this.person = person[index]
          }
        }
      }
    )
    return this.person;
  }


  create(data) {
    console.log(data)
    return this.http.post(db, data)

  }

}
export class Person {
  id: number; name: string; lastName: string; minor: string; resident: string; email: string; nationalNumber: number; address: { string; id: number; street: string; postcode: number; city: string; country: string }; birthPlace: string; dateOfBirth: string; maritalStatus: string; partnerName: string
}
