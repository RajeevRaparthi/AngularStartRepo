import { Component, OnInit } from '@angular/core';
import { projDetails } from '../../../assets/projDetails';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.css']
})
export class RadialComponent implements OnInit {
  dataSource : projDetails[];
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  this.getRadialProjectData();
  }

  getRadialProjectData():void{
    this.projectService.getRadialProjDetails().subscribe(dataSource => this.dataSource = dataSource); 
 // this.dataSource =  this.projectService.getRadialProjDetails();
  
}

displayedColumns: string[] = ['name', 'description'];

}
