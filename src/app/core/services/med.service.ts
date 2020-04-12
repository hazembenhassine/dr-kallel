import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor(private http: HttpClient) { }

  private static handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  getSpecialties(): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/specialities`)
      .toPromise().catch(MedService.handleError);
  }

  getClientQuotes(): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/clients`)
      .toPromise().catch(MedService.handleError);
  }

  postQuestion(body: any): Promise<any> {
    return this.http.post(`${environment.api.backendURL}api/clients`, JSON.stringify(body))
      .toPromise().catch(MedService.handleError);
  }

  getBlogPosts(offset: number, limit: number): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/blog?skip=${offset}&limit=${limit}`)
      .toPromise().catch(MedService.handleError);
  }

  getBlogById(id: string): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/blog/${id}`)
      .toPromise().catch(MedService.handleError);
  }

  getActivityPosts(): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/activities`)
      .toPromise().catch(MedService.handleError);
  }

}
