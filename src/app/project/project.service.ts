import { Injectable } from '@angular/core';
import { projDetails } from '../../assets/projDetails';
import { adcProjectData } from '../../assets/mock-adcProjDetails';
import { sauaProjectData } from '../../assets/mock-sauaProjDetails';
import { tdtProjectData } from '../../assets/mock-tdtProjDetails';
import { cplusProjectData } from '../../assets/mock-cplusProjDetails';
import { radialProjectData } from '../../assets/mock-radial';

import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }


  getADCProjDetails():Observable<projDetails[]> {
    return of(adcProjectData);
  }

  getSAUAProjDetails():Observable<projDetails[]> {
    return of(sauaProjectData);
  }

  getTDTProjDetails():Observable<projDetails[]> {
    return of(tdtProjectData);
  }

  getcplusProjDetails():Observable<projDetails[]> {
    return of(cplusProjectData);
  }

  getRadialProjDetails():  Observable<projDetails[]> {
    return of(radialProjectData);
  }
}
