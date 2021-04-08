import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }


  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please Enter Item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item=> {
            console.log('Saved clicked',item);
          }
        }
      ]
    });
    prompt.present();
  }
}