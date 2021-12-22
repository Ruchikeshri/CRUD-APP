import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  std:Student;
  constructor(private stdService: StudentService,  private route: ActivatedRoute,
    private router: Router) {
    this.std = new Student();
   }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = +params['id']
      });

      console.log(this.id);

       this.stdService.getById(this.id).subscribe(resp =>{
         this.std = resp;
       })

  }
  updateData(val){
   this.stdService.updateData(this.std).subscribe(resp=>{
     alert('Data Updated');
   })
  }

}
