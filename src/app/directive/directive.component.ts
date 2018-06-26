import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  number: string = "password";
	deuxLumieres: string;
  nom: string;
  public status: boolean = true;
  public texts: Array<{chiffre}>=[];

  constructor() { 
  	this.nom = 'Fadel et Maria Seck';
  	this.deuxLumieres = 'T, M';
    this.texts.push({chiffre: "un"});
    this.texts.push({chiffre: 'deux'});
    this.texts.push({chiffre: 'trois'});
  }
  
  


  ngOnInit() {
  }

}