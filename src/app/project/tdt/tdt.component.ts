import { Component, OnInit } from '@angular/core';


import { projDetails } from '../../../assets/projDetails';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-tdt',
  templateUrl: './tdt.component.html',
  styleUrls: ['./tdt.component.css']
})
export class TdtComponent implements OnInit {
  dataSource : projDetails[];
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  this.getTDTProjectData();
  }

  getTDTProjectData():void{
    this.projectService.getTDTProjDetails().subscribe(dataSource => this.dataSource = dataSource); 
 // this.dataSource =  this.projectService.getTDTProjDetails();
  }

displayedColumns: string[] = ['name', 'description'];

}
