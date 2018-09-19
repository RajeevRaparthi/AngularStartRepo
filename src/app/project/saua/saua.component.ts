import { Component, OnInit } from '@angular/core';

import { projDetails } from '../../../assets/projDetails';
import { ProjectService } from '../project.service';

 
@Component({
  selector: 'app-saua',
  templateUrl: './saua.component.html',
  styleUrls: ['./saua.component.css']
})
export class SauaComponent implements OnInit {

  dataSource : projDetails[];
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  this.getSAUAProjectData();
  }

  getSAUAProjectData():void{
    this.projectService.getSAUAProjDetails().subscribe(dataSource => this.dataSource = dataSource); 
  //this.dataSource =  this.projectService.getSAUAProjDetails();
  
}

displayedColumns: string[] = ['name', 'description'];

}
