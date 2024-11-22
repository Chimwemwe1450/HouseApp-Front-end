import { Component } from '@angular/core';
import { HouseService } from 'src/app/house.service';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addingahouse',
  templateUrl: './addingahouse.page.html',
  styleUrls: ['./addingahouse.page.scss'],
})
export class AddingahousePage {
  house = {
    address: '',
    description: '',
    geolocation: null as { lat: number; lng: number } | null,
    images: [] as { url: string, description: string }[],
  };

  constructor(
    private houseService: HouseService,
    private alertController: AlertController
  ) {}


  async getGeolocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.house.geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    } catch (error) {
      this.showError('Could not fetch geolocation. Please try again.');
    }
  }


  async showError(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }


  onImageUpload(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        this.house.images.push({
          url: e.target.result, 
          description: ''
        });
      };

      reader.readAsDataURL(file);
    }
  }

  onSubmit() {

    this.houseService.addHouse(this.house).subscribe(
      response => {
        console.log('House added successfully:', response);
        alert('House added successfully!');
        this.house = {
          address: '',
          description: '',
          geolocation: null,
          images: [],
        };
      },
      error => {
        console.error('Error adding house:', error);
        this.showError('There was an error adding the house. Please try again.');
      }
    );
  }
}
