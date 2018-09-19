import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { projDetails } from '../../../assets/projDetails';


@Component({
  selector: 'app-cplus',
  templateUrl: './cplus.component.html',
  styleUrls: ['./cplus.component.css']
})
export class CplusComponent implements OnInit {
  dataSource : projDetails[];
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  this.getCplusProjectData();
  }

  getCplusProjectData():void{
    this.projectService.getcplusProjDetails().subscribe(dataSource => this.dataSource = dataSource); 
  //this.dataSource =  this.projectService.getcplusProjDetails();
  
}

displayedColumns: string[] = ['name', 'description'];

}
