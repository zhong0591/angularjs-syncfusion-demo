import { Injectable } from '@angular/core';
import { Student } from './Student'
import { HttpClient } from '@angular/common/http';//HttpHeaders,, HttpParams
@Injectable({
  providedIn: 'root'
})

export class DatasourceService {
  http: HttpClient
  constructor(private httpClient: HttpClient) {
    this.http = httpClient
  }

  async getData(): Promise<Array<Student>> {
    let response: any = await this.http.get('/assets/students.json').toPromise();
    return response;
  }
}
