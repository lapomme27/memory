import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	assets:string ="assets/";
	previousCard=null;
	tempo=false;


	animals:Array<{title:string,image:string, click:boolean}> = [
	{
		'title': 'Grenouille',
		'image': 'img/animals/frog-icon.png',
		'click': false
	},
	{
		'title': 'Grenouille',
		'image': 'img/animals/frog-icon.png',
		'click': false
	},
	{
		'title': 'Oiseau',
		'image': 'img/animals/bird-icon.png',
		'click': false
	},
	{
		'title': 'Oiseau',
		'image': 'img/animals/bird-icon.png',
		'click': false
	},
	{
		'title': 'Cochon',
		'image': 'img/animals/pig-icon.png',
		'click': false
	},
	{
		'title': 'Cochon',
		'image': 'img/animals/pig-icon.png',
		'click': false
	},
	{
		'title': 'Chat',
		'image': 'img/animals/black-cat-icon.png',
		'click': false
	},
	{
		'title': 'Chat',
		'image': 'img/animals/black-cat-icon.png',
		'click': false
	},
	{
		'title': 'cheval',
		'image': 'img/animals/horse-icon.png',
		'click': false
	},
	{
		'title': 'Ane',
		'image': 'img/animals/donkey-icon.png',
		'click': false
	},
	{
		'title': 'cheval',
		'image': 'img/animals/horse-icon.png',
		'click': false
	},
	{
		'title': 'Ane',
		'image': 'img/animals/donkey-icon.png',
		'click': false
	},
	];

	constructor() {
		this.messCards();
	}

	/**
	 * mélange des éléments du tableau
	 */
	messCards(){
		for(var i=this.animals.length-1; i >= 1; i--){
	
			//hasard reçoit un nombre entier aléatoire entre 0 et position
			var hasardNumber=Math.floor(Math.random()*(i+1));
			
			//Echange
			var place=this.animals[i];
			this.animals[i]=this.animals[hasardNumber];
			this.animals[hasardNumber]=place;
		}
	}

	showCard(object){
		if (this.tempo==false){
			object.click=true;

			if (this.previousCard == null){
				this.previousCard= object;
			}
			else if (this.previousCard.title == object.title){
				this.previousCard=null;
			}
			else if (this.previousCard.title != object.title){
				this.tempo=true;
				setTimeout(()=>{
					object.click=false;
					this.previousCard.click=false;
					this.tempo=false;
					this.previousCard=null;
				},1500);
			}
		}
	}
}