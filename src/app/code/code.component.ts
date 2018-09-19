import { Component, OnInit } from '@angular/core';
import {CodeService} from './code.service';
import {Technology} from '../../assets/technology';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})

export class CodeComponent implements OnInit {
  techdata :Technology[];
  max = 10;
  min = 0;
  step = 1;
  thumbLabel = true;
  value = 0;

  displayedColumns: string[] = ['position', 'name','rating','experience'];
  dataSource : Technology[];


  constructor(private codeService:CodeService) { }

  ngOnInit() {
    console.log('Inside NgONit');
    this.getTechnologyData();
  }

  getTechnologyData():void {
     this.codeService.getTechData().subscribe(dataSource => this.dataSource = dataSource); 
    //this.techdata=this.codeService.getTechData();

    //console.log('Inside getTechnologyData '+ this.techdata.length);
    //this.dataSource=this.techdata;
  } 
 

 
}
