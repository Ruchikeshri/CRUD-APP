import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  std: Student
  constructor( private stdService: StudentService) {
    this.std = new Student();
   }

  ngOnInit(): void {
  }
  takeData(){
   this.stdService.postStudentData(this.std).subscribe(resp =>{
     alert('New Record Added');

   })
  }

}
