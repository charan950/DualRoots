import { Injectable } from '@angular/core';
import { Design } from '../models/design';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignService extends ApiService{

  constructor(private http: HttpClient) {
    super(http);
  }

  getDesigns(): Observable<Design[]> {
    return this.get(`Design`).pipe(map((res:Design[]) => {     
      return res.map(_ => new Design(_));;
    }));
  }
  update(design:any[]):Observable<boolean>{
    design.forEach(des=>{
      des.editableColumns=JSON.stringify(des.editableColumns);
      des.mandatroyColumns=JSON.stringify(des.mandatroyColumns);
      des.isMandatory = Number(des.isMandatory)
    })
    console.log(design)
    return this.post('Design',design)
  }
}
