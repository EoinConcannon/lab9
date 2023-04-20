import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  statusStage:String = "Happy";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  async onClick(){
    await this.storage.create();
    await this.storage.set("status", this.statusStage);
    await this.navCtrl.navigateBack('/home');
  }

  async ionViewWillEnter(){
    await this.storage.create();
    this.statusStage = await this.storage.get('status');
  }

  ngOnInit() {
  }

}
