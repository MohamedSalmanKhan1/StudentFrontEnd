import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student: Student = new Student();
  submitted= false;

  constructor(private studentService: StudentService) { }
  

  ngOnInit(): void {
  }

  createStudent():void{

    const data ={
      name: this.student.name,
      age: this.student.age,
      courseFees: this.student.courseFees
  };
  
  // let resp=this.studentService.create(data);

  //     resp.subscribe((data)=>{
  //       console.log(data)
  //       this.student=data
  //     });
  //   }
  

  this.studentService.create(data)
  .subscribe(
    response => {
      console.log(response);
      this.submitted= true;
    },
    error => {
      console.log(error);
    });

  }

  newStudent(): void{
    this.submitted = false;
    this.student = {
      name: this.student.name,
      age: this.student.age,
      courseFees: this.student.courseFees
    };
  }
}
