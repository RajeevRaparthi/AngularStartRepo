import { Injectable } from '@angular/core';
import{Technology} from '../../assets/technology';
import{TECH_DATA} from '../../assets/mock-technology';
import{Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor() { }

 getTechData():Observable<Technology[]> {
    return of(TECH_DATA);
} 

/* getTechData():Technology[] {
  return TECH_DATA;
} */

}
