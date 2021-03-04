import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/student';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
student:any;
students: any;
id:number=0;


  constructor(
    private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    // this.StudentListComponent.readStudents();
    // this.message = '';
    // this.getStudent(this.route.snapshot.paramMap.get('id'));
  }

  // getStudentt(id): void {
  //   this.studentService.read(id)
  //     .subscribe(
  //       product => {
  //         this.currentProduct = product;
  //         console.log(product);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // setAvailableStatus(status): void {
  //   const data = {
  //     name: this.currentProduct.name,
  //     description: this.currentProduct.description,
  //     available: status
  //   };

  //   this.productService.update(this.currentProduct.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentProduct.available = status;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  updateStudent(): void {
    this.studentService.update(this.id, this.student)
      .subscribe(
        response => {
          console.log(response);
          this.student = new Student();
          this.router.navigate(['/students']);
        },
        error => {
          console.log(error);
        });
  }

  delete(): void {

    this.studentService.delete(this.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/students']);
        },
        error => {
          console.log(error);
        });
  }

  deleteAll(): void {
    this.studentService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
  });

  }
}
