import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  statusStage:any = "Happy";
    constructor(private storage:Storage) {}

  async ionViewWillEnter(){
    await this.storage.create();
    this.statusStage = await this.storage.get('status');
  }
  
}
