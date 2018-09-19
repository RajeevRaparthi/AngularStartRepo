import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { projDetails } from '../../../assets/projDetails';

 
@Component({
  selector: 'app-adc',
  templateUrl: './adc.component.html',
  styleUrls: ['./adc.component.css']
})


export class AdcComponent implements OnInit {

 dataSource : projDetails[];
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  this.getADCProjectData();
  }

getADCProjectData():void{
  this.projectService.getADCProjDetails().subscribe(dataSource => this.dataSource = dataSource); 
//  this.dataSource =  this.projectService.getADCProjDetails();

}

displayedColumns: string[] = ['name', 'description'];
}
