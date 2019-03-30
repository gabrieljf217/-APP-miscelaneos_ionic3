import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { Pagina3Page } from "../pagina3/pagina3";

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3=Pagina3Page;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
  }

  irPagina3(){
    this.navCtrl.push(this.pagina3);
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");  
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");  
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");    
  }
  
  ionViewWillLeave(){
    console.log("ionViewWillLeave");    
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");    
  }

  ionViewCanLeave(){
    console.log("ionViewCanLeave");  
    console.log("Espere dos degundos para salir");
    const loader = this.loadingCtrl.create({
      content: "Por favor espere...",
      duration: 2000
    });
    loader.present();
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");    
  }
  ionViewCanEnter(){
    console.log("ionViewCanEnter"); 

    let promesa = new Promise((resolve,reject)=>{
      const confirm = this.alertCtrl.create({
        title: '¿Seguro?',
        message: '¿Esta seguro que dese entrar?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => resolve(false)
          },
          {
            text: 'Aceptar',
            handler: () => resolve(true)
          }
        ]
      });
      confirm.present();
    })
    return promesa;
    
  }
}
