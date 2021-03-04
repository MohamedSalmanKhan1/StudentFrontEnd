import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  
  
  readAll(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/student/');
  }
//   read(id): Observable<any> {
//     return this.httpClient.get(`${'http://localhost:8080/api/student/'}/${id}`);
// }

// searchByName(name): Observable<any> {
//   return this.httpClient.get(`${'http://localhost:8080/api/student/'}?id=${name}`);
// }

create(data): Observable<any> {
  return this.httpClient.post('http://localhost:8080/api/student/', data);
}

update(id, data): Observable<any> {
  return this.httpClient.put(`${'http://localhost:8080/api/student/'}/${id}`, data);
}

delete(id): Observable<any> {
  return this.httpClient.delete(`${'http://localhost:8080/api/student/'}/${id}`);
} 

deleteAll(): Observable<any> {
  return this.httpClient.delete('http://localhost:8080/api/student/');
}



}
