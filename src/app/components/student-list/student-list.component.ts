import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: any;
  currentStudent:any;
  currentIndex = -1;
  name = '';

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {

    this.readStudents();
  }

  readStudents(): void {
    this.studentService.readAll()
      .subscribe(
        students => {
          this.students = students;
          console.log(students);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readStudents();
    this.currentStudent = null;
    this.currentIndex = -1;
  }

  setCurrentStudent(student, index): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }

  // deleteAllProducts(): void {
  //   this.productService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.readProducts();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // searchByName(): void {
  //   this.productService.searchByName(this.name)
  //     .subscribe(
  //       products => {
  //         this.products = products;
  //         console.log(products);
  //       },
  //       error => {
  //         console.log(error);
  //       });

  delete(): void {
    this.studentService.delete(this.currentStudent.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/students']);
        },
        error => {
          console.log(error);
        });
  }

}

