import { Component } from '@angular/core';
import { HouseService } from 'src/app/house.service';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';
import { NgxImageCompressService } from 'ngx-image-compress';

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
    images: [] as { url: string; description: string }[],
  };

  constructor(
    private houseService: HouseService,
    private alertController: AlertController,
    private imageCompress: NgxImageCompressService
  ) {}

  // Fetch geolocation
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

  // Show error alert
  async showError(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Handle image upload with compression
  async onImageUpload(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = async (e: any) => {
        const base64Image = e.target.result;

        // Compress the image
        const compressedImage = await this.imageCompress.compressFile(
          base64Image, // Image source
          -1, // Orientation; -1 for default
          50, // Quality: 1 (low) to 100 (high)
          50 // Ratio: 1 (original) to 100 (high compression)
        );

        this.house.images.push({
          url: compressedImage,
          description: '',
        });
      };

      reader.readAsDataURL(file);
    }
  }

  // Delete an image
  deleteImage(index: number) {
    this.house.images.splice(index, 1);
  }

  // Delete the house
  deleteHouse() {
    if (confirm('Are you sure you want to delete this house and all its images?')) {
      this.house = {
        address: '',
        description: '',
        geolocation: null,
        images: [],
      };
    }
  }

  // Submit house data
  onSubmit() {
    if (!this.house.address || !this.house.description || !this.house.geolocation) {
      this.showError('Please complete all required fields before submitting.');
      return;
    }

    this.houseService.addHouse(this.house).subscribe(
      (response) => {
        console.log('House added successfully:', response);
        alert('House added successfully!');
        this.resetForm();
      },
      (error) => {
        console.error('Error adding house:', error);
        this.showError('There was an error adding the house. Please try again.');
      }
    );
  }

  // Reset form after submission
  resetForm() {
    this.house = {
      address: '',
      description: '',
      geolocation: null,
      images: [],
    };
  }
}
