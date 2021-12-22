import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  std: Student;
  constructor(private http: HttpClient) {
    this.std = new Student();
   }

   // to fetch all the records
  getStudentData():Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:3000/students');
  }

  // to delete the student by id
  deleteStudent(val):Observable<any>{
  return this.http.delete(`http://localhost:3000/students/${val}`);
  }
  // to create a new record
  postStudentData(val): Observable<any>{
    return  this.http.post('http://localhost:3000/students',val)
  }

 // to fetch the student record by the id
  getById(val):Observable<any>{
    return this.http.get(`http://localhost:3000/students/${val}`)
  }
  // to update the student detail by id
  updateData(val):Observable<any>{
    return this.http.put(`http://localhost:3000/students/${val.id}`,val);
  }
}
